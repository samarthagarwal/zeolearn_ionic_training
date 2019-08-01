import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { ToastController, NavController } from '@ionic/angular';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  password: string;

  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private navService: NavigationService) {
    
  }

  async login() {
    if(this.email == null && this.password == null) {
      let toast = await this.toastCtrl.create({
        message: "Check email and password",
        duration: 3000
      });
      await toast.present();
      return;
    }

    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(async(userCredentials) => {
      console.log(userCredentials);
      let toast = await this.toastCtrl.create({
        message: "You have been logged in successfully.",
        duration: 3000
      });
      await toast.present();
      this.navService.setUid(userCredentials.user.uid);
      this.navCtrl.navigateForward("/todos");
    }).catch(async (err) => {
      console.log(err);
      let toast = await this.toastCtrl.create({
        message: err.message,
        duration: 3000
      });
      await toast.present();
    })
  }

}
