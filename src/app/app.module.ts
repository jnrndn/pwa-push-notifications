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
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { MessagingService } from './service/messaging.service';
import { PushService } from './service/push.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.config, 'push'),
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    AngularFirestoreModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSnackBarModule,
  ],
  providers: [PushService, MessagingService],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(swUpdate: SwUpdate, swPush: SwPush, snackBar: MatSnackBar) {
    swUpdate.available.subscribe((update) => {
      console.log('update availabe', update);
      const snack = snackBar.open('Your app is not up-to-date', 'Reload');

      snack
        .onAction()
        .subscribe(() => window.location.reload());

    });
  }

}
