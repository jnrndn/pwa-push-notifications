import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map, filter, tap } from 'rxjs/operators';

@Injectable()
export class MessagingService {

  private pushUsersCollection: AngularFirestoreCollection;
  private messageCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.pushUsersCollection = this.afs.collection('pushUsers');
    this.messageCollection = this.afs.collection('pushMessages');

  }

  getPresmission() {

  }

  saveData(user: PushSubscription) {
    const id = this.afs.createId();
    const item = { id, user };
    console.log('saving', item);
    this.pushUsersCollection.doc(id).set(item);
  }

  removeUser(user: PushSubscription) {
    console.log('deleteing from firebase');
    console.log('https://github.com/firebase/firebase-js-sdk/issues/901');


    this.pushUsersCollection.valueChanges().pipe(
      tap((x) => {
        console.log('x', x);
      }),
    );
  }

  sendMessage(message: string){
    const id = this.afs.createId();
    const item = { id, message};
    this.messageCollection.doc(id).set(item);
    console.log('message saved', message);
    
  }
}
