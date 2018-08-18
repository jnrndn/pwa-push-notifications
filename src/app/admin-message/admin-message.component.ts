import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../service/messaging.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AuthGuardService } from '../service/auth-guard.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: [ './admin-message.component.scss' ],
})
export class AdminMessageComponent {

  message: string;
  user: any;

  constructor(
    public afAuth: AngularFireAuth,
    private authGuard: AuthGuardService,
  ) { }

  login() {
    this.authGuard.login();
  }

  logout() {
    this.authGuard.logout();
  }

}
