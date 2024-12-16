import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { NavComponent } from './components/nav.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    // NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fundacion Pescar';
  subtitle = 'Capacitacion Angular'
}
