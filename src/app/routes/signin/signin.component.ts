import { Component, Inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-signin',
  imports: [
    RouterLinkWithHref,
  ],
  providers: [
    SessionService,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  session = Inject(SessionService)
}
