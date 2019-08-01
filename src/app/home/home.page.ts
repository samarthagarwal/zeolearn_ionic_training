import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { User } from '../models/user.model';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url: string = "https://jsonplaceholder.typicode.com/users";
  users: any[] = [];

  constructor(private httpClient: HttpClient, private loadingCtrl: LoadingController, private navigationService: NavigationService) {
    this.getUsers();
  }

  async getUsers() {

    let loading = await this.loadingCtrl.create({
      message: "Getting users..."
    });

    await loading.present();

    this.httpClient.get(this.url).toPromise().then((data: any) => {
      console.log(data);
      this.users = data;
      loading.dismiss();
    }).catch((error) => {
      console.log(error);
      loading.dismiss();
    })
  }

  gotoDetails(user){
    let u: User = new User(user);
    this.navigationService.set(u);
  }

}
