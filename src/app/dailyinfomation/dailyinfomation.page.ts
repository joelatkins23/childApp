import { Component, OnInit} from '@angular/core';
import {  NavController ,  Platform} from '@ionic/angular';

@Component({
  selector: 'app-dailyinfomation',
  templateUrl: './dailyinfomation.page.html',
  styleUrls: ['./dailyinfomation.page.scss'],
})
export class DailyinfomationPage implements OnInit {
  eat='0 Times';  
  check1=true;  
  check2=true;  
  check3=true;  
  check4=true;  
  pt_active=false;
  constructor(public platform: Platform,  private navCtrl: NavController) { }

  ngOnInit() {
    if(this.platform.is('android')){
      this.pt_active=false;
    } else if(this.platform.is('ios')){
      this.pt_active=true;
    }
  }
  
  goBack() {
    this.navCtrl.pop();
  }
  getData(p){
    this.eat=p;
  }
  setChecked1(p){
    this.check1=p;
  }
  setChecked2(p2){
    this.check2=p2;
  }
  setChecked3(p3){
    this.check3=p3;
  }
  setChecked4(p4){
    this.check4=p4;
  }
}
