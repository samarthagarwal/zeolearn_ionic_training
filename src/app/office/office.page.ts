import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.page.html',
  styleUrls: ['./office.page.scss'],
})
export class OfficePage implements OnInit {

  name: string;
  age: number;

  constructor(private navigationService: NavigationService) {
    this.name = this.navigationService.get().name;
    this.age = this.navigationService.get().age;
    console.log(this.age)
  }

  ngOnInit() {
  }

}
