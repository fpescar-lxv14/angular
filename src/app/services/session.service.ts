import { Injectable } from '@angular/core';
import { Session } from '../models/session.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private session:Session = {
    username: "",
    password: "",
    role: "GUEST"
  }
}
