import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLinkWithHref,
    JsonPipe,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signin = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/[^@\W]+@\w+(\.\w+)*/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?:(?=.*[A-Z])+(?=.*[a-z])+(?=.*[\d])+(?=.*[\W])).{8,}$/)
    ])
  })
  constructor(private sessionService:SessionService){}
  handleSubmmit(){
  }
}
