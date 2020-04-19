import {Component, OnInit} from '@angular/core';
import {CompanyService} from "./company.service";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'servicesGroup2';

  logged = false;

  username = '';
  password = '';

  constructor(private companyService: CompanyService) {}

  ngOnInit(){
    let token = localStorage.getItem('token');
    if (token){
      this.logged = true;
    }
  }

  login(){
    this.companyService.login(this.username, this.password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        this.logged = true;

        this.username = '';
        this.password = '';
      })
  }

  onSubmit(loginForm: NgForm) {
    let {username, password} = loginForm.value;
    this.companyService.login(username, password)
      .subscribe(res => {

        localStorage.setItem('token', res.token);

        this.logged = true;
        username = '';
        password = '';
    })
  }

  logout(){
    localStorage.clear();
    this.logged = false;
  }

}