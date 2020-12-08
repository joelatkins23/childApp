import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagedetailPage } from './messagedetail.page';

const routes: Routes = [
  {
    path: '',
    component: MessagedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagedetailPageRoutingModule {}
