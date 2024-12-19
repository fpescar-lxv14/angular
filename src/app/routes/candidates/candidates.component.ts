import { Component } from '@angular/core';
import { CandidatesService } from '../../services/candidates.service';
import { JsonPipe } from '@angular/common';
import { InfocardComponent } from '../../components/infocard/infocard.component';

@Component({
  selector: 'app-candidates',
  imports: [
    JsonPipe,
    InfocardComponent
  ],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {
  users:any=[]
  error:any = null
  constructor(private candidateService:CandidatesService){
    this.candidateService.getCandidates('?results=24')
    .subscribe({
      next: (res:any) => { this.users = res?.results },
      error: (error) => { this.error = error}
  })}
  showData(){
    console.log(this.users)
  }
  getData(){
    this.candidateService.getCandidates('?results=12')
      .subscribe({
        next: (res:any) => { this.users.push(res?.results) },
        error: (error) => { this.error = error }
      })
  }
}
