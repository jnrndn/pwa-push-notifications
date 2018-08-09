import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwPush } from '@angular/service-worker';

import { firebaseConfig } from '../../environments/firebase.config';
import { checkedSubject } from '../helpers/app.helpers';
import { MessagingService } from './messaging.service';

@Injectable()
export class PushService {

  private pushSub: PushSubscription;

  constructor(
    private swPush: SwPush,
    private snackBar: MatSnackBar,
    private messagingService: MessagingService,
  ) {
    this.swPush.subscription
      .subscribe((sub: PushSubscription) => {
        this.pushSub = sub;
      });
  }

  addSubscriber() {
    const serverPublicKey = firebaseConfig.VAPID_PUBLIC_KEY;

    if (this.pushSub) {
      return;
    }

    this.swPush.requestSubscription({
      serverPublicKey,
    })
      .then((pushSubcription) => {
        this.messagingService.saveData(pushSubcription.toJSON());
        this.snackBar.open('Notifications are enabled', null, {
          duration: 2000,
        });
        checkedSubject.next(true);
      })
      .catch((error) => {
        console.log('error', error);
        checkedSubject.next(false);
        this.snackBar.open('Notifications are disabled', null, {
          duration: 2000,
        });
      });
  }

  removeSubscriber() {
    this.swPush.subscription
      .subscribe((pushSubscription) => {
        console.log('push sub', pushSubscription.toJSON(), 'will be removed');
        // TODO: remove user token from firebase
        this.messagingService.removeUser(pushSubscription);
      });
  }

  showMessage() {
    console.log('subcribing to messages');
    // FIXME: This still remind to test 
    this.swPush.messages.subscribe((message) => {
      console.log('incoming message', message);
    });
  }

  getSubscription() {
    return this.swPush.subscription;
  }
}
