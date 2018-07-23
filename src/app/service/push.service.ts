import { Injectable, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { firebaseConfig } from '../../environments/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class PushService {

  constructor(private swPush: SwPush) {
  }

  addSubscriber() {
    console.log('add subcriber to push notification');

    const serverPublicKey = firebaseConfig.VAPID_PUBLIC_KEY;
    this.swPush.requestSubscription({
      serverPublicKey,
    })
      .then((pushSubcription: PushSubscription) => {
        console.log('Request subscription', pushSubcription.endpoint);
      })
      .catch((error) => {
        console.log('Subcription request failed', error);
      });
  }

}
