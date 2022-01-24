import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/menutabs/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate:[AuthGuard],
    data: {
      role: 'USER',
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/userspages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/userspages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    canActivate:[AuthGuard],
    data: {
      role: 'USER'
    },
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./pages/menuleft/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./pages/menuleft/history/history.module').then( m => m.HistoryPageModule)
      },
      {
        path: 'friends',
        loadChildren: () => import('./pages/menuleft/friends/friends.module').then( m => m.FriendsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./pages/menuleft/messages/messages.module').then( m => m.MessagesPageModule)
      },
    ]
    },
  {
    path: 'register-details',
    loadChildren: () => import('./pages/userspages/register-details/register-details.module').then( m => m.RegisterDetailsPageModule),
    canActivate:[AuthGuard],
    data: {
      role: 'USER'
    }
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./pages/userspages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
