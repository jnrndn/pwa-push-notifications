import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AuthGuardService } from './service/auth-guard.service';
import { MessagingService } from './service/messaging.service';
import { PushService } from './service/push.service';
import { MessageComponent } from './admin-message/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AdminMessageComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.config, 'push'),
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    AppRoutingModule,
  ],
  providers: [ PushService, MessagingService, AuthGuardService ],
  bootstrap: [ AppComponent ],
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
