import { Component, Inject, Input } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { JsonPipe } from '@angular/common';
import { SessionService } from './services/session.service';
import { Session } from './models/session.interface';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    JsonPipe,
    NavComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    SessionService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fundacion Pescar';
  subtitle = 'Capacitacion Angular'
  
  constructor(public sessionService:SessionService){}
}
