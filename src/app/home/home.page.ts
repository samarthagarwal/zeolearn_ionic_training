import { Component } from '@angular/core';
import { LoadingController, ToastController, AlertController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  trainingName: string = "Ionic Framework Training";
  myName: number;

  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, private alertCtrl: AlertController, private actionsheetCtrl: ActionSheetController, private router: Router, private navigationService: NavigationService) {

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

  async showAlert() {

    let alert = await this.alertCtrl.create({
      header: "OTP Verification",
      subHeader: "6 digit one time password",
      message: "We have sent a one-time password on your registered phone number.",
      inputs: [{
        name: "otp",
        type: "number",
        id: "otp",
        value: "",
        placeholder: "123456"
      }, {
        name: "name",
        type: "text",
        id: "name",
        value: "",
        placeholder: "John"
      }],
      buttons: [{
        text: "Cancel",
        handler: () => {
          console.log("User tapped on Cancel button");
        }
      }, {
        text: "OK",
        handler: (data) => {
          console.log("User tapped on OK button");
          console.log(data);
        }
      }]
    });

    await alert.present();

  }

  async showActionSheet() {

    let actionsheet = await this.actionsheetCtrl.create({
      header: "Choose Pizza",
      subHeader: "Select your favorite type",
      buttons: [{
        text: "Abc",
        handler: () => {
          console.log("Abc")
        },
        icon: "pizza"
      }, {
        text: "Xyz",
        handler: () => {
          console.log("Xyz")
        },
        icon: "pizza"
      }, {
        text: "Efg",
        handler: () => {
          console.log("Efg")
        },
        icon: "pizza"
      },
      {
        text: "Cancel",
        handler: () => {
          console.log("Cancel")
        },
        icon: "close",
        role: "cancel"
      }]
    });

    await actionsheet.present();

  }

  gotoOfficePage() {
    this.navigationService.set({
      "name": this.myName
    });
    this.router.navigate(['/office']);
  }

}
