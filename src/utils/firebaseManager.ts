import * as firebase from 'firebase';
import * as admin from 'firebase-admin'
import { DBconfig, FirebasePermissions } from '../config/DBConfig';
const fire = require('../../fireconfig.json');

admin.initializeApp({
    credential: admin.credential.cert(fire),
    databaseURL: "https://beta-56978.firebaseio.com",
    storageBucket: "gs://beta-56978.appspot.com/"
});

export const app = firebase.initializeApp(DBconfig.firebaseConfig);
export const db = admin.firestore();

export function DBinsertDocs(collectionName: string, key: string, ObjectToDB: object){
    let setDoc = db.collection(collectionName).doc('PDF' + key).set(ObjectToDB);
}
