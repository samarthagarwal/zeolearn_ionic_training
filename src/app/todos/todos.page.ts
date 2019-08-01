import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NavigationService } from '../navigation.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  todos: any[] = [];

  constructor(private alertCtrl: AlertController, private navService: NavigationService, private navCtrl: NavController) {
    this.getTodos();
  }

  ngOnInit() {
  }

  async getTodos() {
    this.todos = [];

    let querySnapshot = await firebase.firestore().collection("todos").where("owner_id", "==", this.navService.getUid()).get();

    for(let i = 0; i < querySnapshot.docs.length; i ++) {
      this.todos.push(querySnapshot.docs[i].data());
    }
  }

  async create() {
    let alert = await this.alertCtrl.create({
      header: "Create",
      subHeader: "Add New ToDO Details",
      inputs: [{
        type: "text",
        name: "todo_text",
        placeholder: "Get groceries..."
      }, {
        type: "date",
        name: "todo_date",
        placeholder: "2019-08-01"
      }],
      buttons: [{
        text: "Cancel",
      }, {
        text: "Create",
        handler: async (data) => {
          console.log(data);

          // save the document on firestore

          await firebase.firestore().collection("todos").add({
            "todo_text": data.todo_text,
            "todo_date": new Date(data.todo_date),
            "owner_id": this.navService.getUid(),
            "created": firebase.firestore.FieldValue.serverTimestamp()
          })

          // refresh the list
          this.getTodos();

        }
      }]
    });

    await alert.present();
  }

  formatDate(t): string {
    let d: Date = t.toDate();
    return d.toDateString();
  }

  async logout() {
    await firebase.auth().signOut();
    this.navCtrl.navigateRoot('/home');
  }

}
