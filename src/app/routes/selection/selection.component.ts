import { Component, Pipe } from '@angular/core';
import { Candidate } from '../../models/candidate.interface';
import { SelectionService } from '../../services/selection.service';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-selection',
  imports: [
    JsonPipe,
  ],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css'
})
export class SelectionComponent {
  list:Candidate[] = []

  constructor(private select:SelectionService){
    this.list = this.select.getCandidates()
  }
  getKeys(object:object){
    return Object.keys(object)
  }
  getValues(object:object){
    return Object.values(object)
  }
  getEntries(object:object){
    return Object.entries(object)
  }
}
