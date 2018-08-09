import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

exports.sendMessage = functions.firestore
    .document(`/pushMessages/{id}`)
    .onCreate((snap, context) => {
        const data = snap.data();
        console.log('context', context);
        

        const message = data.message;

        console.log('message', message);
        return;
    });
