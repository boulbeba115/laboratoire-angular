import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/events/event.service';

@Component({
  selector: 'app-edit-event-component',
  templateUrl: './edit-event-component.component.html',
  styleUrls: ['./edit-event-component.component.scss']
})
export class EditEventComponentComponent implements OnInit {
  evenement: Evenement;
  isReady: boolean = false;
  submitted: boolean = false;
  constructor(private eventService: EventService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.getItem()
  }
  getItem() {
    this.eventService.getEventById(this.route.snapshot.params.id)
      .subscribe(
        data => {
          this.evenement = data;
          this.isReady = true;
        },
        error => {
          console.log(error);
        });
  }
  updateEvent() {
    this.eventService.addEvent(this.evenement)
      .subscribe(
        response => {
          this.submitted = true;
          this.router.navigate(['/events']);
        },
        error => {
          console.log(error);
        });
  }
}
