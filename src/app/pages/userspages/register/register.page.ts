import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService, private router: Router, private toastCtrl: ToastController ) { }

  ngOnInit() {

  }


  signUp(){
    this.auth.registerUser(this.user.email, this.user.password)      
    .then((res) => {
      this.toastControle("Utilisateur enregistré", 'success');
      this.auth.sendVerificationMail();
      this.router.navigateByUrl('/verify-email');
    }).catch((error) => {
      this.toastControle(error.message, 'danger')
    })
}

toastControle(msg, cssClass) {
  this.toastCtrl.create({
    message: msg,
    duration: 2000,
    color: cssClass
  }).then(toast => toast.present());
}

}
