import { Component, OnInit} from '@angular/core';
import {  NavController ,  Platform} from '@ionic/angular';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {
  deleteitems= false;
  selected_arr=[];
  title="My Picture";
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
  close(){
    this.deleteitems= false;
    this.title='My Picture';
    this.selected_arr=[];
  }
  setChecked(p,s){
    const found = this.selected_arr.find(element => element.id==p);
    const itemarray={      
      id: p,
      status: s
    };
    if(found){
      const item_arrs=[itemarray];
      this.selected_arr=this.selected_arr.filter(function(e) { 
        return !item_arrs.some(function(s) { 
            return s.id === e.id; 
        });
    });
    }else{     
      this.selected_arr.push(itemarray);
    }    
    if(this.selected_arr.length>0){
      this.title=this.selected_arr.length+'  selected';
      this.deleteitems= true;
    }else{
      this.title='My Picture';
      this.deleteitems= false;
    }  
  }
  found(p){
    const found = this.selected_arr.find(element => element.id==p);
    if(found){
      return true;
    }else{
      return false;
    }
  }
}
