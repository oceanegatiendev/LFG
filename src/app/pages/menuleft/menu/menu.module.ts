import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'menu',
  //   component: MenuPage,
  //   children: [
  //     {
  //       path: 'profile',
  //       loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  //     },
  //     {
  //       path: 'history',
  //       loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
  //     },
  //     {
  //       path: 'friends',
  //       loadChildren: () => import('../friends/friends.module').then( m => m.FriendsPageModule)
  //     },
  //     {
  //       path: 'messages',
  //       loadChildren: () => import('../messages/messages.module').then( m => m.MessagesPageModule)
  //     },
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: 'menu/profile'
  // }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [MenuPage]
})
export class MenuPageModule {}
