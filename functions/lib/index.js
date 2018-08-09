"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
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
//# sourceMappingURL=index.js.map