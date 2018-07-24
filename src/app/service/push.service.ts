import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwPush } from '@angular/service-worker';
import { take } from 'rxjs/operators';

import { firebaseConfig } from '../../environments/firebase.config';
import { checkedSubject } from '../helpers/app.helpers';

@Injectable()
export class PushService {


  constructor(private swPush: SwPush, private snackBar: MatSnackBar) { }

  addSubscriber() {
    console.log('add subcriber to push notification');
    const serverPublicKey = firebaseConfig.VAPID_PUBLIC_KEY;

    this.swPush.requestSubscription({
      serverPublicKey,
    })
      .then((pushSubcription: PushSubscription) => {
        console.log('Subscription request allowed', pushSubcription.toJSON());
        checkedSubject.next(true);
        // TODO: save user token to firebase
        this.snackBar.open('Push notifications are enabled', null, {
          duration: 2000,
        });
      })
      .catch((error) => {
        console.log('Subcription request denied', error);
        checkedSubject.next(false);
        this.snackBar.open('Push notifications are disabled', null, {
          duration: 2000,
        });
      });
  }

  removeSubscriber() {
    this.swPush.subscription.pipe(
      take(1),
    )
      .subscribe((pushSubscription) => {
        console.log('push sub', pushSubscription.toJSON(), 'will be removed');

        // TODO: remove user token from firebase
      });
  }

  showMessage() {
    console.log('subcribing to messages');

    this.swPush.messages.subscribe((message) => {
      console.log('incoming message', message);
    });
  }

}
