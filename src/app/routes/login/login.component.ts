import { Component, EventEmitter, Inject, Output } from '@angular/core';
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
  @Output() submitLogin = new EventEmitter()
  login = Inject(SessionService)
  handleLogin (){
    this.submitLogin.emit(this.login)
  }
}
