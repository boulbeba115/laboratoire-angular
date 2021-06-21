import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { Publication } from 'src/app/models/publication.model';
@Component({
  selector: 'app-createpublicationcomponent',
  templateUrl: './createpublicationcomponent.component.html',
  styleUrls: ['./createpublicationcomponent.component.scss']
})
export class CreatepublicationcomponentComponent implements OnInit {
  publication: Publication = {
    titre: '',
    type: '',
    lien: '',
    pdfSrc: '',
    membre: {
      id: ''
    }
  };
  submitted: boolean = false;
  constructor(private publicationService: PublicationService, private router: Router) { }

  ngOnInit(): void {

  }
  addPublication() {
    let id = localStorage.getItem("currentUserId")
    this.publication.membre.id = id
    this.publicationService.createPublication(this.publication)
      .subscribe(
        response => {
          this.submitted = true;
          this.router.navigate(['/publication']);
        },
        error => {
          console.log(error);
        });
  }

}
