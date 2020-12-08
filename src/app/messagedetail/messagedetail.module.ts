import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagedetailPageRoutingModule } from './messagedetail-routing.module';

import { MessagedetailPage } from './messagedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagedetailPageRoutingModule
  ],
  declarations: [MessagedetailPage]
})
export class MessagedetailPageModule {}
