import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  trainingName: string = "Ionic Framework Training";
  
  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }

  async showLoading() {
    let loading = await this.loadingCtrl.create({
      message: "Loading data, please wait..."
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 4000)
  }

  async showToast() {

    let toast = await this.toastCtrl.create({
      message: "Username or password is wrong. Try again.",
      duration: 3000,
      position: "top",
      buttons: [{
        text: "Try Again",
        handler: () => {
          console.log("Trying again....");
        }
      }, {
        text: "Cancel",
        handler: () => {
          console.log("Canceling....");
        }
      }]
    });

    await toast.present();

  }

}
