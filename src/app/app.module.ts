import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationService } from './navigation.service';

import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCS1EFvqnTr85Lvxd6ku-EirnbJ2d7Pvyg",
  authDomain: "ioniczeolearn.firebaseapp.com",
  databaseURL: "https://ioniczeolearn.firebaseio.com",
  projectId: "ioniczeolearn",
  storageBucket: "",
  messagingSenderId: "738103354848",
  appId: "1:738103354848:web:af877951cb8519ad"
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    Camera,
    Geolocation,
    NavigationService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
