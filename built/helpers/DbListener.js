"use strict";
exports.__esModule = true;
require("firebase/firestore");
var firestore_1 = require("rxfire/firestore");
var operators_1 = require("rxjs/operators");
var DBManager = require("../utils/firebaseManager");
var app = DBManager.app;
var parsedPDFMerimonRef = app.firestore().collection('parsedPDFMerimon');
function listener() {
    firestore_1.fromCollectionRef(parsedPDFMerimonRef)
        .pipe(operators_1.tap(function (cities) { return console.log(cities); }), operators_1.tap(function (_) { return console.log("Doc inserted!"); }))
        .subscribe();
}
exports.listener = listener;
