import { Component, Input } from '@angular/core';
import { Link } from '../../models/link.interface';

@Component({
  selector: 'app-links',
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  @Input() links:Link[] = []
}
