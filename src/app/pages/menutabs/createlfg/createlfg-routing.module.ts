import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatelfgPage } from './createlfg.page';

const routes: Routes = [
  {
    path: '',
    component: CreatelfgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatelfgPageRoutingModule {}
