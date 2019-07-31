import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, private navParams: NavParams){
    console.log(this.navParams.get("name"));
  }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss({
      "status": "success",
      "order_id": 12356
    });
  }

}
