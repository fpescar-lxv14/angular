import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from '../../components/validation/validation.component';
import { Session } from "../../models/session.interface"
import { passwordValidation, emailValidation, nameValidation } from '../../models/data.validation';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    RouterLinkWithHref,
    ReactiveFormsModule,
    ValidationComponent,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signin = new FormGroup({
    username: new FormControl('', nameValidation),
    email: new FormControl('', emailValidation),
    password: new FormControl('', passwordValidation)
  })
  pass2 = new FormControl('',passwordValidation)
  constructor(private sessionService:SessionService){}
  compare(){
    return this.signin.get('password')?.value !== this.pass2.value
  }
  handleSubmmit(){
    this.sessionService.setSession(this.signin.value as Session)
  }
}