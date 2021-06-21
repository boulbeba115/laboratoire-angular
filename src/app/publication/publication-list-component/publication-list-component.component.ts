import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication/publication.service';
import { Publication } from 'src/app/models/publication.model';

@Component({
  selector: 'app-publication-list-component',
  templateUrl: './publication-list-component.component.html',
  styleUrls: ['./publication-list-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PublicationListComponentComponent implements AfterViewInit {
  publication?: Publication[];
  displayedColumns: string[] = ["id", "titre", "type", "membre", "membreTitre", "lien", "pdfSrc", "createdAt", "updatedAt", "Actions"];
  //
  dataSource: MatTableDataSource<Publication> = new MatTableDataSource();
  isReady = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private publicationService: PublicationService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void {
    this.publicationService.getAll()
      .subscribe(
        data => {
          this.publication = data;
          this.dataSource.data = this.publication
          this.isReady = true;
        },
        error => {
          console.log(error);
        });
  }
  getType(membre) {
    if (membre.hasOwnProperty('dateInscription') ||
      membre.hasOwnProperty('diplome') ||
      membre.hasOwnProperty('encadrant'))
      return "Etudiant"
    return "Enseignant"
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  deleteEvent(pub) {
    this.publicationService.deletePublication(pub.id)
      .subscribe(
        response => {
          console.log(response);
          this.getAllEvents();
        },
        error => {
          console.log(error);
        });
  }
}




