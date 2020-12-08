import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyinfomationPage } from './dailyinfomation.page';

const routes: Routes = [
  {
    path: '',
    component: DailyinfomationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyinfomationPageRoutingModule {}
