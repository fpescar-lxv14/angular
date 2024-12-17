import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session.interface';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLinkWithHref,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private sessionService:SessionService){}
  isLogged () {
    return this.sessionService.getSession().username;
  }
}
