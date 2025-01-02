import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  url = "https://expressserver.onrender.com/selection/process";
  selection:Candidate[] = [];
  constructor(private http:HttpClient){}
  getCandidates(){
    return this.selection;
  }
  selectCandidate(candidate:Candidate){
    !this.selection.find((item:Candidate) => item.login.uuid === candidate.login.uuid) && 
    this.selection.push(candidate)
  }
  removeCandidate(id:string){
    this.selection = this.selection.filter((s:any) => s.login.uuid !== id)
  }
  uploadSelection(data:any){
    this.http.post(this.url, data)
  }
}
