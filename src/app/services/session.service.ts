import { Injectable } from '@angular/core';
import { Session } from '../models/session.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private session:Session = {
    username: "",
    password: "",
    role: "GUEST",
  }
  getSession(){ 
    return this.session; 
  }
  setSession(session:Session){ 
    return this.session = session;
  }
  setValue(key:keyof Session, value:any){
    return this.session[key] = value
  }
}
