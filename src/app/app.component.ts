import { AuthService } from './services/auth.service';
import { Router, RouterEvent } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  pages = [
    {
      title: "Profil",
      url: '/menu/profile',
      icon: 'contact'
    },
    {
      title: "Mes LFG",
      url: '/menu/history',
      icon: 'filing'
    },
    {
      title: "Messages",
      url: '/menu/messages',
      icon: "mail"
    },
    {
      title: "Amis",
      url:'/menu/friends',
      icon: 'people'
    },
  ];


  selectedPath = '';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController,
    private auth: AuthService
  ) {
    this.initializeApp();
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  signOut(){
    this.menu.toggle();
    this.auth.signOut();
  }
}
