import { Component, OnInit, ViewChild } from '@angular/core';
import {IonContent} from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController, AlertController, NavController} from '@ionic/angular';
// import { Keyboard } from '@ionic-native/keyboard/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  email: any;
  password: any;
  keyboardStyle = { width: '100%', height: '0px' };
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(public loadingController: LoadingController, public r: Router, public alertController: AlertController,
    private navCtrl: NavController) {

    }
    ngOnInit() {
      this.email = "";
      this.password = "";     
    }
    goto(p) {
      this.navCtrl.navigateForward(p)
    }
    gotoForgot() {
      this.navCtrl.navigateForward('forgot')
    }  
}
