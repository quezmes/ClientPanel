import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from './_models/client';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Client Panel';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService){}

  ngOnInit(): void {
      this.setCurrentClient();
  }

  setCurrentClient(){
    const client : Client = JSON.parse(localStorage.getItem('client'));
    this.accountService.setCurrentClient(client);
  }
}
