import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from "../auth.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    if (this.authService.login(form.value.username, form.value.password)){
      alert('WELCOME ADMIN');
      this.goBack();
    }else {
      alert('PLEASE TRY AGAIN');
    }
  }

  goBack(): void {
    this.location.back();
  }

}
