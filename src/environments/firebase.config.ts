export const firebaseConfig: FirebaseConfigInterface = {
    apiKey: 'AIzaSyDKu3lYF_3p7No1OGeDyKMiROUfdujF7uE',
    authDomain: 'pwa-push-notifications-108e3.firebaseapp.com',
    databaseURL: 'https://pwa-push-notifications-108e3.firebaseio.com',
    projectId: 'pwa-push-notifications-108e3',
    storageBucket: 'pwa-push-notifications-108e3.appspot.com',
    messagingSenderId: '446519166896',
    VAPID_PUBLIC_KEY: 'BH3yDtnbMpNLXslz_enW4D05HP09CmovtIKTuQpJYWYfQ0YFIL0mkQ55jGjplpR2aKvTMDDGYoAxGez1W_Yhqmw',
};


export interface FirebaseConfigInterface {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    VAPID_PUBLIC_KEY: string;
}
