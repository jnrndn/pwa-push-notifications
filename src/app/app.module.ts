import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatInputModule, MatSlideToggleModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PushNotificationService } from './service/pushNotification.service';
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
  ],
  providers: [ PushNotificationService, FireBaseConfigService ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
