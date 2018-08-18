"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.sendMessage = functions.firestore
    .document(`/pushMessages/{messageId}`)
    .onCreate((snap, context) => {
    const data = snap.data();
    console.log('context', context);
    const message = data.message;
    console.log('message', message);
    admin.firestore().collection('pushUsers').get()
        .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    })
        .catch((err) => console.log('error', err));
});
//# sourceMappingURL=index.js.map