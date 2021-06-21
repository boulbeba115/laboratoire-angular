import { Member } from "./membre.model";

export interface Outil {
    id?:any;
    nomOutil:string;
    source?:string;
    membre?:Member;
    createdAt?:Date;
    updatedAt?:Date;
  }
