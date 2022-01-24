import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigateByUrl('/')
  }

}
