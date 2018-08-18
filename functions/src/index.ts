import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
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
