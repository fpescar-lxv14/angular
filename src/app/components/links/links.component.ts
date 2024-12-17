import { Component, Input } from '@angular/core';
import { Link } from '../../models/link.interface';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-links',
  imports: [
    RouterLinkWithHref
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  @Input() links:Link[] = []
  @Input() isRouterLink = false;
}
