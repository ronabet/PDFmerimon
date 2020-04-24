"use strict";
exports.__esModule = true;
require("firebase/firestore");
var firestore_1 = require("rxfire/firestore");
var operators_1 = require("rxjs/operators");
var DBManager = require("../utils/firebaseManager");
var app = DBManager.app;
var parsedPDFMerimonRef = app.firestore().collection('parsedPDFMerimon');
function listener() {
    firestore_1.collectionChanges(parsedPDFMerimonRef, ['added'])
        .pipe(operators_1.skip(1), operators_1.map(function (addedEvents) { return addedEvents[0].doc.data(); }), operators_1.tap(function (data) {
        console.log(data);
        Object.keys(data).forEach(function (key) {
            var _a;
            var hi = data[key].split(",").toString();
            var arr = [];
            if (data[key].match("(.*?)\s*=\s*([^\s]+)")) {
                arr.push(hi.split("="));
                var keyData = arr[0][0];
                var valueData = arr[0][1].split(",")[0];
                var ObjectToDB = (_a = {}, _a[keyData] = valueData, _a);
                console.log("Object to insert: " + ObjectToDB);
            }
        });
    }))
        .subscribe();
}
exports.listener = listener;
