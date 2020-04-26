"use strict";
exports.__esModule = true;
require("firebase/firestore");
var firestore_1 = require("rxfire/firestore");
var operators_1 = require("rxjs/operators");
function listener(collectionRef) {
    firestore_1.collectionChanges(collectionRef, ['added'])
        .pipe(operators_1.skip(1), operators_1.map(function (addedEvents) { return addedEvents[0].doc.data(); }), operators_1.tap(function (data) {
        console.log(data);
    }))
        .subscribe();
}
exports.listener = listener;
