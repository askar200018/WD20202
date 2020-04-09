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
    this.authService.login();
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
