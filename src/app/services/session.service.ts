import { Injectable } from '@angular/core';
import { Session } from '../models/session.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private session:Session = { username: "", password: "" }
  public getSession(){ 
    return this.session; 
  }
  public setSession(session:Session){ 
    return this.session = session;
  }
  public setValue(key:keyof Session, value:any){
    return this.session[key] = value
  }
}