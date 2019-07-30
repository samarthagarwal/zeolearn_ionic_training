import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  trainingName: string = "Ionic Framework Training";
  visibility: boolean = true;

  people: any[] = [{
    "name": "Samarth",
    "age": 28
  }, {
    "name": "James",
    "age": 23
  }, {
    "name": "Bob",
    "age": 12
  }, {
    "name": "Alice",
    "age": 32
  }, {
    "name": "Travis",
    "age": 29
  }];
  
  constructor() {

  }

  toggleVisibility() : void {
    this.visibility = !this.visibility;
  }

}
