import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:User;
  constructor() { }

  login() {
    this.user = {
      id: 1,
      username:'Askar',
      password:'password'
    }
  }

  isAuthorized() {
    return !!this.user;
  }
}
