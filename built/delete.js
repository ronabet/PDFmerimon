"use strict";
exports.__esModule = true;
var firestore_1 = require("rxfire/firestore");
var firebase_1 = require("firebase");
require("firebase/firestore");
var operators_1 = require("rxjs/operators");
// Set up Firebase
var app = firebase_1.initializeApp({
    apiKey: "AIzaSyC7ruWcxShnzukFlMp1NgS7FfSk4fchjdE",
    authDomain: "beta-56978.firebaseapp.com",
    databaseURL: "https://beta-56978.firebaseio.com",
    projectId: "beta-56978",
    storageBucket: "beta-56978.appspot.com",
    messagingSenderId: "366503984038",
    appId: "1:366503984038:web:84fa35ec799c6714a12d67",
    measurementId: "G-GD1GJPBVLL"
});
var db = app.firestore();
// Listen to only 'added' events
firestore_1.collectionChanges(db.collection('parsedPDFMerimon'), ['added'])
    .pipe(operators_1.skip(1), operators_1.map(function (addedEvents) { return addedEvents[0].doc.data(); }), operators_1.tap(function (data) { return console.log(data); }))
    .subscribe();
