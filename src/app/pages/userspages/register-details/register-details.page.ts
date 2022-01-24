import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.page.html',
  styleUrls: ['./register-details.page.scss'],
})
export class RegisterDetailsPage implements OnInit {

  user = {
    photoURL: '',
    displayName: '',
    updatedAt: new Date(),
  }

  constructor(private auth: AuthService, private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }
 

  saveDetails() {
    this.auth.signUpDetails(this.user).then(res => {
      this.router.navigateByUrl('/verify-email');
      this.toastControle('Détails ajoutés à votre profil', 'success');
    }, err => {
      this.toastControle('Nous avons recontré un problème, veuillez réessayer', 'danger');
    })
    console.log(this.user);
  }

  toastControle(msg, colorClass) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color : colorClass,
    }).then(toast => toast.present());
  }

}
