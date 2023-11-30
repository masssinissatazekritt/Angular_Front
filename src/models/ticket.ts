import { Eleve } from "./eleve.model";

export enum MAJOR {
  Option1 = 'AI',
  Option2 = 'EEA',
  Option3 = 'WEB',
  
}


export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  //studentID: null;
  eleve: Eleve;
  major?: MAJOR;
  archived: boolean;
  eleveID: number;
}
