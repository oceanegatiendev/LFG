import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email= '';
  password= '';
 

  constructor(private auth: AuthService, private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() {

  }

  logIn(email, password) {
    this.auth.signIn(this.email, this.password);
  }



}
