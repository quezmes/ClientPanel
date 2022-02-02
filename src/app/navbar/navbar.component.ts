import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../_models/client';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {}
  loggedIn: boolean;


  constructor(public accountService: AccountService) { }

  ngOnInit(): void {

  }

  login(){
    this.accountService.login(this.model).subscribe({next: response => {
      console.log(response);
    },error: 
    error => console.log(error)});
  }

  logout(){
    this.accountService.logout();
  }
}
