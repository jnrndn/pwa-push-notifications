import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule, MatSlideToggleModule, MatSnackBar, MatSnackBarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PushService } from './service/push.service';
import { FireBaseConfigService } from './service/fireBaseConfig.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSnackBarModule,
  ],
  providers: [ PushService, FireBaseConfigService ],
  bootstrap: [ AppComponent ],
})
export class AppModule {

  constructor(swUpdate: SwUpdate, snackBar: MatSnackBar) {
    swUpdate.available.subscribe((update) => {
      console.log('update availabe', update);
      const snack = snackBar.open('Your app is not up-to-date', 'Reload');

      snack
        .onAction()
        .subscribe(() => window.location.reload());

    });
  }

}
