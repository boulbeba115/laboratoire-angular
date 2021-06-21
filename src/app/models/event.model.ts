import { Member } from "./membre.model";

export interface Evenement {
    id?:any;
    titre?:string;
    date?:Date;
    lieu?:string;
    membre?:Member;
    createdAt?:Date;
    updatedAt?:Date;
  }