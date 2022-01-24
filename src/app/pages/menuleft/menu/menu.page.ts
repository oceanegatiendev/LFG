import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // pages = [
  //   {
  //     title: "Profil",
  //     url:'/menu/profile',
  //   },
  //   {
  //     title: "Mes LFG",
  //     url:'/menu/history',
  //   },
  //   {
  //     title: "Messages",
  //     url:'/menu/messages',
  //   },
  //   {
  //     title: "Amis",
  //     url:'/menu/friends',
  //   },
  // ];


  // selectedPath = '';

  constructor(private router: Router, private menu: MenuController) {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   this.selectedPath = event.url;
    // });
  }

  ngOnInit() {
  }


}
