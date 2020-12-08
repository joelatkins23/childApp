import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyinfomationPageRoutingModule } from './dailyinfomation-routing.module';

import { DailyinfomationPage } from './dailyinfomation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyinfomationPageRoutingModule
  ],
  declarations: [DailyinfomationPage]
})
export class DailyinfomationPageModule {}
