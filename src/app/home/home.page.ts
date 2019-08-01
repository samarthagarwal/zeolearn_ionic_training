import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { User } from '../models/user.model';
import { NavigationService } from '../navigation.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url: string = "https://jsonplaceholder.typicode.com/users";
  users: any[] = [];

  imageString: string;

  constructor(private httpClient: HttpClient, private loadingCtrl: LoadingController, private navigationService: NavigationService, private camera: Camera, private geo: Geolocation) {
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

  clickPicture() {

    const options: CameraOptions = {
      quality: 80,
      targetHeight: 400,
      targetWidth: 400,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageString) => {
      console.log(imageString);
      this.imageString = "data:image/png;base64," + imageString;
    }).catch((error) => {
      console.log(error);
    })

  }

  getLocation() {
    const options: GeolocationOptions = {
      timeout: 10000,
      enableHighAccuracy: true
    };

    this.geo.watchPosition().subscribe((position: Geoposition) => {
      console.log(position);
    },(error) => {
      console.log(error);
    });
  }

}
