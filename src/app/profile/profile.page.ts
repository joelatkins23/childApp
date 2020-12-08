import { Component, OnInit} from '@angular/core';
import {  NavController ,  Platform} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  camera:any = 'assets/images/icon-camera.png';
  edit:any = 'assets/images/icon-edit.png';
  close:any = 'assets/images/icon-close.png';
  profileimg:any = 'assets/images/img-avata.png';
  edit_status=false;
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
  changeListener($event): void {
    this.profileimg = 'assets/images/bg-profile.png';
  }
  change_edit(p){
    if(p===1){
      this.edit_status=true;
    }else{
      this.edit_status=false;
    }
    
  }
}
