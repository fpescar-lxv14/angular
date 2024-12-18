import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ValidationComponent } from '../../components/validation/validation.component';
import { Session } from "../../models/session.interface"

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
  nameValidation = [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(50),
  ]
  emailValidation = [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[^@\W]+@\w+(\.\w+)*/),
  ]
  passwordValidation = [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?:(?=.*[A-Z])+(?=.*[a-z])+(?=.*[\d])+(?=.*[\W])).{8,}$/)
  ]
  pass2 = new FormControl('',this.passwordValidation)
  signin = new FormGroup({
    username: new FormControl('', this.nameValidation),
    email: new FormControl('', this.emailValidation),
    password: new FormControl('', this.passwordValidation)
  })
  constructor(private sessionService:SessionService){}
  compare(){
    return this.signin.get('password')?.value !== this.pass2.value
  }
  handleSubmmit(){
    this.sessionService.setSession(this.signin.value as Session)
  }
}