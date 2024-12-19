import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatButton } from '@angular/material/button'

@Component({
  selector: 'app-infocard',
  imports: [
    MatButton,
    MatCardModule,
    MatListModule,
  ],
  templateUrl: './infocard.component.html',
  styleUrl: './infocard.component.css'
})
export class InfocardComponent {
  @Input() user:any = null;

}