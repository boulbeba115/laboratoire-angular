import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { Publication } from 'src/app/models/publication.model';

@Component({
  selector: 'app-edit-publication',
  templateUrl: './edit-publication.component.html',
  styleUrls: ['./edit-publication.component.scss']
})
export class EditPublicationComponent implements OnInit {
  publication: Publication = {
    titre: '',
    type: '',
    lien: '',
    pdfSrc: '',
    membre: {
      id: ''
    }
  };
  isReady: boolean = false;
  submitted: boolean = false;
  constructor(private publicationService: PublicationService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getItem();
  }
  getItem() {
    this.publicationService.getPublicationById(this.route.snapshot.params.id)
      .subscribe(
        data => {
          this.publication = data;
          this.isReady = true;
        },
        error => {
          console.log(error);
        });
  }
  updatePublication() {
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
