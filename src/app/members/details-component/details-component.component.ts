import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member, Student, Teacher } from 'src/app/models/membre.model';
import { MemberService } from 'src/app/services/members/member.service';
@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.scss']
})
export class DetailsComponentComponent implements OnInit {
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
  isReady?: boolean = false;
  
  constructor(private memberService: MemberService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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
          console.log(this.member)
          this.isReady = true;
        },
        error => {
          console.log(error);
        });
  }
}
