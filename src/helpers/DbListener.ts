import 'firebase/firestore';
import { collectionChanges } from 'rxfire/firestore';
import { map, tap, skip } from 'rxjs/operators';
import * as DBManager from '../utils/firebaseManager';


const app = DBManager.app;
const parsedPDFMerimonRef = app.firestore().collection('parsedPDFMerimon');


export function listener () {
  
  collectionChanges(parsedPDFMerimonRef, ['added'])
  .pipe(
      skip(1),
      map(addedEvents => addedEvents[0].doc.data()),
      tap(data => {
          console.log(data);
          Object.keys(data).forEach(function(key) {
            var hi = data[key].split(",").toString();
            let arr = [];
            if(data[key].match("(.*?)\s*=\s*([^\s]+)")){
                arr.push(hi.split("="));
                var keyData = arr[0][0];
                var valueData = arr[0][1].split(",")[0];
                var ObjectToDB = {[keyData]: valueData};
                console.log("Object to insert: " + ObjectToDB);
            }
          })
        })
      )
 .subscribe();

}
