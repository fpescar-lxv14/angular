import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

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
  @Output() submitLogin = new EventEmitter()
  login = {
    username:"",
    password: ""
  }
  handleLogin (){
    this.submitLogin.emit(this.login)
  }
}
