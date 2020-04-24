import 'firebase/firestore';
import { collectionChanges } from 'rxfire/firestore';
import { map, tap, skip } from 'rxjs/operators';
import * as DBManager from '../utils/firebaseManager';


const app = DBManager.app;
const parsedPDFMerimonRef = app.firestore().collection('parsedPDFMerimon');
// const parsedPDFMerimonRef = app.firestore();

export function listener () {
  
  collectionChanges(parsedPDFMerimonRef, ['added'])
  .pipe(
      skip(1),
      map(addedEvents => addedEvents[0].doc.data()),
      tap(data => console.log(data))
      )
 .subscribe();





  // fromCollectionRef(parsedPDFMerimonRef)
  //   .pipe(
  //     tap(cities => console.log(cities)),
  //     tap(_ => console.log("Doc inserted!")),
  //     )
  //   .subscribe();
}
