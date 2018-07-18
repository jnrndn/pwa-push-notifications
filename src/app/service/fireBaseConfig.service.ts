import { Injectable } from '@angular/core';

import { firebaseConfig, FirebaseConfigInterface } from '../../environments/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class FireBaseConfigService {

  private config: FirebaseConfigInterface = firebaseConfig;

  constructor() { }

  get(key: string) {
    return this.config[ key ];
  }
}
