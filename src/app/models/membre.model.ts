export enum MembersTypes { ETUDIANT = "Etudiant", ENSEIGNANT = "Enseignant", VISITEUR = "Visiteur" }

export enum StudentDiploma { MASTER = "Master", THESE = "Thèse" }

export interface Member {
  id?:any;
  cin?:string;
  nom?:string;
  prenom?:string;
  date?:Date;
  photo?:string;
  password?:string;
  cv?:string;
  email?:string;
  createdAt?:Date;
  updatedAt?:Date;
}

export interface Student extends Member {
  dateInscription?: Date;
  diplome?: string;
  encadrant?: any;
}

export interface Teacher extends Member {
  grade?: string;
  etablissement?: string;
}