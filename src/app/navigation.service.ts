import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  data: any;

  constructor() { }

  get() {
    return this.data;
  }

  set(data: any) {
    this.data = data;
  }
}
