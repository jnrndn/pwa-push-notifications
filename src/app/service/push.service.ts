import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { FireBaseConfigService } from './fireBaseConfig.service';

@Injectable({
  providedIn: 'root',
})
export class PushService {

  private API_URL: string;

  constructor(private swPush: SwPush, private firebaseconf: FireBaseConfigService) {
    this.API_URL = this.firebaseconf.get('authDomain');
  }

  addDubscriber() {

  }
}
