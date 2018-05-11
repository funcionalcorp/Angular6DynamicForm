import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SessionService {

  learning = {
    name : 'Portuguese'
  }
  
  private languageSource = new BehaviorSubject<any>(this.learning);
  currentLanguage = this.languageSource.asObservable();

  constructor() { }

  changeName (newName:string) {
    this.learning.name = newName;
    this.languageSource.next(this.learning);
  }

}
