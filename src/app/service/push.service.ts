import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SwPush } from '@angular/service-worker';
import { take } from 'rxjs/operators';

import { firebaseConfig } from '../../environments/firebase.config';
import { checkedSubject } from '../helpers/app.helpers';
import { MessagingService } from './messaging.service';

@Injectable()
export class PushService {

  constructor(
    private swPush: SwPush,
    private snackBar: MatSnackBar,
    private mesaggeService: MessagingService,
  ) { }

  addSubscriber() {
    const serverPublicKey = firebaseConfig.VAPID_PUBLIC_KEY;
    this.swPush.requestSubscription({
      serverPublicKey,
    })
      .then((pushSubcription) => {
        this.mesaggeService.saveData(pushSubcription.toJSON());
        this.snackBar.open('Notifications are enabled', null, {
          duration: 2000,
        });
        checkedSubject.next(true);
      })
      .catch((error) => {
        checkedSubject.next(false);
        this.snackBar.open('Notifications are disabled', null, {
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

  getSubscription() {
    return this.swPush.subscription;
  }
}
