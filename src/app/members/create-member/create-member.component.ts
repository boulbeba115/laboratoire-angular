import { Component, OnInit } from '@angular/core';
import { Member, Student, Teacher } from 'src/app/models/membre.model';
import { MemberService } from 'src/app/services/members/member.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {
  nom: string;
  member: any = {
    nom: '',
    prenom: '',
    cin: '',
    email: '',
    cv: '',
    photo: '',
    date: null,
    dateInscription: null,
    diplome: '',
    encadrant: '',
    grade: '',
    etablissement: ''
  }
  teachers?: Member[];
  student?: Student;
  ensignant?: Teacher;
  memberType?: string = '0';
  submitted = false;
  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit(): void {
    this.memberService.getAllTeachers()
      .subscribe(
        data => {
          this.teachers = data;
        },
        error => {
          console.log(error);
        });
  }
  onChange() {
    console.log(this.memberType)
  }
  addMember() {
    if (this.memberType == "0") {
      this.student = {
        nom: this.member.nom,
        prenom: this.member.prenom,
        cin: this.member.cin,
        email: this.member.email,
        cv: this.member.cv,
        photo: this.member.photo,
        date: this.member.date,
        dateInscription: this.member.dateInscription,
        diplome: this.member.diplome,
        encadrant: this.teachers.find(item => item.id == this.member.encadrant),
      }
      this.memberService.createStudent(this.student)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
            this.router.navigate(['/membres']);

          },
          error => {
            console.log(error);
          });
      return
    }
    this.ensignant = {
      nom: this.member.nom,
      prenom: this.member.prenom,
      cin: this.member.cin,
      email: this.member.email,
      cv: this.member.cv,
      photo: this.member.photo,
      date: this.member.date,
      grade: this.member.grade,
      etablissement: this.member.etablissement
    }
    this.memberService.createTeacher(this.ensignant)
      .subscribe(
        response => {
          this.submitted = true;
          this.router.navigate(['/membres']);
        },
        error => {
          console.log(error);
        });

  }


}
