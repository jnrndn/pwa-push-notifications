import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthGuardService implements CanActivate {

  user: any;
  isLoggedIn: boolean = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate() {
    console.log('AuthGuard #canActivate Called');
    // this.afAuth.authState;
    return true;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => {
        this.isLoggedIn = true;
      })
      .catch((err) => {
        console.log('unable to authenticate user', err);
      });
      return this.isLoggedIn;
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.isLoggedIn = false;
      });
      return this.isLoggedIn;
  }
}
