import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private usernameSource = new BehaviorSubject<String>("UsernameSourceShit")
  currentUsername = this.usernameSource.asObservable();

  private loggedSource = new BehaviorSubject<boolean>(false);
  currentLogged = this.loggedSource.asObservable();

  constructor() { }

changeLoggedSource(newVal){
  this.loggedSource.next(newVal);
}

changeUsernameSource(newValUser){
  this.usernameSource.next(newValUser);
}


/*
getLoggedSource(){
return this.loggedSource;
}

setLoggedSource(value: boolean){
  this.loggedSource=value;
}

*/

}
