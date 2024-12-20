import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatButton } from '@angular/material/button'
import { Candidate } from '../../models/candidate.interface';
import { SelectionService } from '../../services/selection.service';

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
  @Input() user:Candidate|null = null;
  @Output() discard = new EventEmitter

  constructor(private select:SelectionService){}
  handleDiscard(){
    this.discard.emit(this.user?.login?.uuid)
  }
  handleSelect(){
    this.select.selectCandidate(this.user as Candidate)
  }
}