import 'firebase/firestore';
import { collectionChanges } from 'rxfire/firestore';
import { map, tap, skip } from 'rxjs/operators';

export function listener (collectionRef) {
  collectionChanges(collectionRef, ['added'])
  .pipe(
      skip(1),
      map(addedEvents => addedEvents[0].doc.data()),
      tap(data => {
          console.log(data);
        })
      )
 .subscribe();
}
