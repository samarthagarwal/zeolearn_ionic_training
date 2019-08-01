import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack("/home");
  }

  async signup() {

    if(this.email == null && this.password == null) {
      let toast = await this.toastCtrl.create({
        message: "Check email and password",
        duration: 3000
      });
      await toast.present();
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(async(userCredentials) => {
      console.log(userCredentials);
      let toast = await this.toastCtrl.create({
        message: "Your account has been created successfully. Please login.",
        duration: 3000
      });
      await toast.present();
      this.navCtrl.navigateBack("/home");
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
