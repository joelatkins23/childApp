import { Component, OnInit} from '@angular/core';
import {  NavController , ModalController, Platform} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  pt_active=false;
  constructor(public modalController: ModalController, public platform: Platform,  private navCtrl: NavController) { }

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
  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}
