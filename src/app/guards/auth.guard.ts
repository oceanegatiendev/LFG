import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { take, map } from 'rxjs/operators'
import { ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user;

  constructor(private router: Router, private auth: AuthService, private toastCtrl: ToastController) {}


  canActivate(route: ActivatedRouteSnapshot) {
    const currentuser = this.auth.isLoggedIn
    if (currentuser) {
      return true;
    } else {
      this.toastControle('Veuillez vous connecter', 'danger');
      return this.router.parseUrl('/login');
    }
    // console.log(this.auth.getUserDetails())
    // const expectedRole = route.data.role;
    // console.log(expectedRole);
    // let loggin = this.auth.isLoggedIn;
    // this.user = this.auth.userData;
    //   return this.user.pipe(
    //     map(user => {
    //       console.log('log: ', user);
    //       if (user) {
    //         let role = user['role'];
  
    //         if (expectedRole == role) {
    //           return true;
    //         } else {
    //           this.toastControle('Veuillez vous connecter', 'danger');
    //           return this.router.parseUrl('/login');
    //         }
    //       } else {
    //         this.toastControle('Veuillez vous connecter', 'danger');
    //         return this.router.parseUrl('/login');
    //       }
    //     })
    //   );



  }


  toastControle(msg, colorClass) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color : colorClass,
    }).then(toast => toast.present());
  }
}
