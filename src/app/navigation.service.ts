import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  uid: string;

  getUid() {
    return this.uid;
  }

  setUid(uid: string) {
    this.uid = uid;
  }
}
