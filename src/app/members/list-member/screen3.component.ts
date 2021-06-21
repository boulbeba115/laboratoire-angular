import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MemberService } from 'src/app/services/members/member.service';
import { Member, Student, Teacher } from 'src/app/models/membre.model';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Screen3Component implements AfterViewInit {
  membres?: Member[];
  displayedColumns: string[] = ["id", "type", "cin", "nom", "date", "email", "cv", "createdAt", "updatedAt", "Actions"];
  //
  dataSource: MatTableDataSource<Member> = new MatTableDataSource();
  isReady = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private memberService: MemberService, private router: Router) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.memberService.getAll()
      .subscribe(
        data => {
          this.membres = data;
          this.dataSource.data = this.membres
          this.isReady = true;
        },
        error => {
          console.log(error);
        });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getType(membre) {
    if (membre.hasOwnProperty('dateInscription') ||
      membre.hasOwnProperty('diplome') ||
      membre.hasOwnProperty('encadrant'))
      return "Etudiant"
    return "Enseignant"
  }
  deleteMember(membre) {
    if (this.getType(membre) == "Etudiant") {
      this.memberService.deleteStudent(membre.id)
        .subscribe(
          response => {
            console.log(response);
            this.getAllStudents();
          },
          error => {
            console.log(error);
          });
    }
    this.memberService.deleteTeacher(membre.id)
      .subscribe(
        response => {
          console.log(response);
          this.getAllStudents();
        },
        error => {
          console.log(error);
        });

  }
}
