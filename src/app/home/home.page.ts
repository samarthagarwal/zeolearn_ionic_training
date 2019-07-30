import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  trainingName: string = "Ionic Framework Training";
  yourName: string = "Zeolearn";
  tnc: boolean = false;
  gender: string = "female";
  city: string = "New Delhi";
  
  constructor() {

  }

  printName(): void {
    console.log(this.city);
  }

}
