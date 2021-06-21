import { Member } from "./membre.model";

export interface Publication {
    id?:any;
    titre?:string;
    type?:string;
    lien?:string;
    pdfSrc?:string;
    membre?:Member;
    createdAt?:Date;
    updatedAt?:Date;
  }
