import * as firebase from 'firebase';
import * as admin from 'firebase-admin'
import { DBconfig } from '../config/DBConfig';
const permissions = require('../config/fireconfig.json');

admin.initializeApp({
    credential: admin.credential.cert(permissions),
    databaseURL: DBconfig.databaseURL,
    storageBucket: DBconfig.storageBucket
});

export const app = firebase.initializeApp(DBconfig.firebaseConfig);
export const db = admin.firestore();
export const collectionRef = app.firestore().collection(DBconfig.collectionName);

