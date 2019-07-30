import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  trainingName: string = "Ionic Framework Training";
  
  constructor(private loadingCtrl: LoadingController) {

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

}
