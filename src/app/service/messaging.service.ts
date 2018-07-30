import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class MessagingService {

  private pushUsersCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) {
    this.pushUsersCollection = this.afs.collection('pushUsers');

  }

  getPresmission() {

  }

  saveData(user) {
    const id = this.afs.createId();
    const item = { id, user };

    this.pushUsersCollection.doc(id).set(item);
  }
}
