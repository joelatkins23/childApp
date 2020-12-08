import { Component, OnInit} from '@angular/core';
import {  NavController , ModalController, Platform} from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

 
  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss();
  }

}
