import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/models/event.model';
import { EventService } from 'src/app/services/events/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event-component',
  templateUrl: './create-event-component.component.html',
  styleUrls: ['./create-event-component.component.scss']
})
export class CreateEventComponentComponent implements OnInit {


  evenement: Evenement = {
    titre: '',
    date: null,
    lieu: '',
    membre: {
      id: ''
    }
  };
  submitted: boolean = false;
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
  }
  addEvenement() {
    let id = localStorage.getItem("currentUserId")
    this.evenement.membre.id = id
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
