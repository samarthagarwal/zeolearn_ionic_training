import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  user: User;

  constructor() { }

  get() {
    return this.user;
  }

  set(user: User) {
    this.user = user;
  }
}
