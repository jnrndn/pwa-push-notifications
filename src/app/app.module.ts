import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSnackBar,
  MatSnackBarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule, SwPush, SwUpdate } from '@angular/service-worker';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';

import { environment } from '../environments/environment';
import { firebaseConfig } from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PushService } from './service/push.service';

firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSnackBarModule,
  ],
  providers: [ PushService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {

  constructor(swUpdate: SwUpdate, swPush: SwPush, snackBar: MatSnackBar) {


    if (swPush.isEnabled) {
      console.log('push is enabled');
      navigator.serviceWorker
        .ready
        .then((registration) => firebase.messaging().useServiceWorker(registration));
    }

    swUpdate.available.subscribe((update) => {
      console.log('update availabe', update);
      const snack = snackBar.open('Your app is not up-to-date', 'Reload');

      snack
        .onAction()
        .subscribe(() => window.location.reload());

    });
  }

}
