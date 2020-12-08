import { Component, OnInit} from '@angular/core';
import {  NavController ,Platform} from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  pt_active=false;
  constructor( public platform: Platform,  private navCtrl: NavController ) {    
    if(this.platform.is('android')){
      this.pt_active=false;
    } else if(this.platform.is('ios')){
      this.pt_active=true;
    }
  }
  ngOnInit() {
  }
  goto(p) {
    this.navCtrl.navigateForward(p)
  } 

}
