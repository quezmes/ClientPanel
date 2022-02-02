import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { Client } from '../_models/client';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:7161/api/';
  private currentClientSource = new ReplaySubject<Client>(1);
  currentClient$ = this.currentClientSource.asObservable();

  constructor(private http: HttpClient) { }
  
  login(model : any){
    return this.http.post(this.baseUrl + 'Client/login', model).pipe(
      map((response : Client)=> {
        const client = response;
        if(client){
          localStorage.setItem('client', JSON.stringify(client));
          this.currentClientSource.next(client);
        }
      })
    )
  }

  register(model: any){
    return this.http.post(this.baseUrl + "Client/register", model).pipe(
      map((client : Client)=> {
        if(client){
          localStorage.setItem('client', JSON.stringify(client));
          this.currentClientSource.next(client);
        }
      })
    )
  }

  setCurrentClient(client: Client){
    this.currentClientSource.next(client);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentClientSource.next(null);
  }
}
