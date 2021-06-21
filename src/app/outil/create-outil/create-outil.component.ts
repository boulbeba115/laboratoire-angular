import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Outil } from 'src/app/models/outil.model';
import { OutilService } from 'src/app/services/outils/Outil.service';

@Component({
  selector: 'app-create-outil',
  templateUrl: './create-outil.component.html',
  styleUrls: ['./create-outil.component.scss']
})
export class CreateOutilComponent implements OnInit {
  outil: Outil = {
    nomOutil: '',
    source: '',
    membre: {
      id: ''
    }
  };
  submitted: boolean = false;
  constructor(private outilService: OutilService, private router: Router) { }

  ngOnInit(): void {
  }
  addOutil() {
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
