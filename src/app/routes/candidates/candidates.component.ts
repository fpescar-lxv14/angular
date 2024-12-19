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
  getData(n="?results=12"){
    this.candidateService.getCandidates(n)
      .subscribe({
        next: (res:any) => { this.users.push(res?.results) },
        error: (error) => { this.error = error }
      })
  }
  replace(id:string){
    // Agregandolo al final del array
    this.users = this.users.filter((item:any) => id !== item.login.uuid)
    this.getData('')
    // // Reemplazando posicion
    // const data = this.candidateService.getCandidates(v => v.results)
    // this.users = this.users.map(item => item.login.uuid == id ? data : item)
  }
}
