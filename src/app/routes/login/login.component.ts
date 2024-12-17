import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLinkWithHref,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    username:"",
    password: "",
  }
  constructor(private sessionService:SessionService){}
  handleLogin (){
    this.sessionService.setSession({
      ...this.login, role: "STANDARD"
    })
  }
}