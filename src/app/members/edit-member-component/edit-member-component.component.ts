import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member, Student, Teacher } from 'src/app/models/membre.model';
import { MemberService } from 'src/app/services/members/member.service';
@Component({
  selector: 'app-edit-member-component',
  templateUrl: './edit-member-component.component.html',
  styleUrls: ['./edit-member-component.component.scss']
})
export class EditMemberComponentComponent implements OnInit {
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
  type?: string;
  teachers?: Member[];
  student?: Student;
  ensignant?: Teacher;
  isReady?: boolean = false;
  submitted?: boolean = false;
  constructor(private memberService: MemberService, private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.memberService.getAllTeachers()
      .subscribe(
        data => {
          this.teachers = data;
        },
        error => {
          console.log(error);
        });
    this.getItem()

  }
  getType(membre) {
    if (membre.hasOwnProperty('dateInscription') ||
      membre.hasOwnProperty('diplome') ||
      membre.hasOwnProperty('encadrant'))
      return "Etudiant"
    return "Enseignant"
  }
  getItem() {
    this.memberService.getById(this.route.snapshot.params.id)
      .subscribe(
        data => {
          this.type = this.getType(data)
          this.member = data;
          this.isReady = true;
        },
        error => {
          console.log(error);
        });
  }

  updateMember() {
    if (this.type == "Etudiant") {
      this.student = {
        id: this.member.id,
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
          },
          error => {
            console.log(error);
          });
      this.router.navigate(['/membres']);
      return
    }
    this.ensignant = {
      id:this.member.id,
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
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/membres']);
        },
        error => {
          console.log(error);
        });

  }

}
