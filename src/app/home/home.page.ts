import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;

  constructor() {

  }

  async execute() {

    console.log("#1");

    // this.getData().then(() => {
    //   console.log("#2");
    //   console.log(this.name);
    // }).catch((error) => {
    //   console.log("An error has occured", error);
    // })

    // try {
    //   let response = await this.getData();
    //   console.log(response);
    // } catch (ex) {
    //   console.log(ex);
    // }
    // console.log("#3");

    this.getData().toPromise().then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err)
    })

  }

  // getData(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       this.name = "Samarth";
  //       resolve({
  //         "status": "success"
  //       });
  //     }, 5000)
  //   })
  // }

  getData(): Observable<any> {
    return new Observable((observer) => {

      let number = 0;

      setInterval(() => {
        observer.next(number)
        number++;
      }, 2000);
    })
  }


}
