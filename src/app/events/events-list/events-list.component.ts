import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/events/event.service';
import { Evenement } from 'src/app/models/event.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EventsListComponent implements AfterViewInit {
  events?: Evenement[];
  displayedColumns: string[] = ["id", "titre", "date", "lieu", "membre", "membreTitre", "createdAt", "updatedAt", "Actions"];
  //
  dataSource: MatTableDataSource<Evenement> = new MatTableDataSource();
  isReady = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private eventService: EventService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void {
    this.eventService.getAll()
      .subscribe(
        data => {
          this.events = data;
          this.dataSource.data = this.events
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
  deleteEvent(event) {
    this.eventService.deleteEvent(event.id)
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