import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host: string = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) {  }
    getActors(){
      const url = this.host + 'actors'
      this.http.get(url)
      return this.http.get(url)
    }
  addActor(actor:any){
    const url = this.host + 'actors'
    return this.http.post(url, actor)
  }
}
