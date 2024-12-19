import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {
  url = 'https://randomuser.me/api/'  
  constructor(private httpClient:HttpClient) { }
  getCandidates(params=''){
    return this.httpClient.get(this.url+params)
  }
  postCandidate(data:any){
    return this.httpClient.post(this.url, data)
  }
  updateCandidate(id:string, data:any){
    return this.httpClient.put(this.url + id, data)
  }
  deleteCandidate(id:string){
    return this.httpClient.delete(this.url + id);
  }
}
