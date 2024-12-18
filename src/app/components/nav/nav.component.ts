import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { RouterLinkWithHref } from '@angular/router';
import { appRoutes } from '../../models/routes.model';

@Component({
  selector: 'app-nav',
  imports: [
    MatIconModule,
    RouterLinkWithHref,
    MatToolbarModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  menu = appRoutes
}
