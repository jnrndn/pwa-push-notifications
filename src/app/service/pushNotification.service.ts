import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { FireBaseConfigService } from './fireBaseConfig.service';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationService {

  constructor(private swPush: SwPush, private firebaseconf: FireBaseConfigService) { }

  subscribeToNotification() {

  }
}
