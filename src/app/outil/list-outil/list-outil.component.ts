import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { OutilService } from 'src/app/services/outils/Outil.service';
import { Outil } from 'src/app/models/outil.model';
@Component({
  selector: 'app-list-outil',
  templateUrl: './list-outil.component.html',
  styleUrls: ['./list-outil.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListOutilComponent implements AfterViewInit {
  outils?: Outil[];
  displayedColumns: string[] = ["id", "nomOutil", "source", "membre", "membreTitre", "createdAt", "updatedAt", "Actions"];
  //
  dataSource: MatTableDataSource<Outil> = new MatTableDataSource();
  isReady = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private outilService: OutilService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getAllOutils();
  }

  getAllOutils(): void {
    this.outilService.getAll()
      .subscribe(
        data => {
          this.outils = data;
          this.dataSource.data = this.outils
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
    this.outilService.deleteOutil(pub.id)
      .subscribe(
        response => {
          this.getAllOutils();
        },
        error => {
          console.log(error);
        });
  }
}




