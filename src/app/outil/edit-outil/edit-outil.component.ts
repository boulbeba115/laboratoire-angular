import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outil } from 'src/app/models/outil.model';
import { OutilService } from 'src/app/services/outils/Outil.service';

@Component({
  selector: 'app-edit-outil',
  templateUrl: './edit-outil.component.html',
  styleUrls: ['./edit-outil.component.scss']
})
export class EditOutilComponent implements OnInit {
  outil: Outil = {
    nomOutil: '',
    source: '',
    membre: {
      id: ''
    }
  };
  isReady: boolean = false;
  submitted: boolean = false;
  constructor(private outilService: OutilService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getItem();
  }
  getItem() {
    this.outilService.getOutilById(this.route.snapshot.params.id)
      .subscribe(
        data => {
          this.outil = data;
          this.isReady = true;
        },
        error => {
          console.log(error);
        });
  }
  updateOutil() {
    let id = localStorage.getItem("currentUserId")
    this.outil.membre.id = id
    this.outilService.createOutil(this.outil)
      .subscribe(
        response => {
          this.submitted = true;
          this.router.navigate(['/tools']);
        },
        error => {
          console.log(error);
        });
  }
}
