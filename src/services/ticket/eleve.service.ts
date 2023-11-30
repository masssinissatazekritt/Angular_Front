import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ELEVES_MOCK } from 'src/mocks/eleve.mock';
import { Eleve } from 'src/models/eleve.model';

////////////////// v1 /////////////////////////////  


@Injectable({
  providedIn: 'root',
})
export class EleveService {

  public eleves_list: Eleve[] = ELEVES_MOCK;
  // getEleves() { 
  //   return ELEVES_MOCK; // Replace this with your actual logic to fetch eleves
  // }
}

/////////////////// V2 ////////////////////////////
