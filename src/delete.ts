import { collectionChanges } from 'rxfire/firestore';
import { firestore, initializeApp } from 'firebase';
import 'firebase/firestore';
import { map, tap, skip } from 'rxjs/operators';

// Set up Firebase
const app = initializeApp({
    apiKey: "AIzaSyC7ruWcxShnzukFlMp1NgS7FfSk4fchjdE",
    authDomain: "beta-56978.firebaseapp.com",
    databaseURL: "https://beta-56978.firebaseio.com",
    projectId: "beta-56978",
    storageBucket: "beta-56978.appspot.com",
    messagingSenderId: "366503984038",
    appId: "1:366503984038:web:84fa35ec799c6714a12d67",
    measurementId: "G-GD1GJPBVLL"
}
    );
const db = app.firestore();

// Listen to only 'added' events
collectionChanges(db.collection('parsedPDFMerimon'), ['added'])
   .pipe(
       skip(1),
       map(addedEvents => addedEvents[0].doc.data()),
       tap(data => console.log(data))
       )
  .subscribe();