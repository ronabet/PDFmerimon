"use strict";
exports.__esModule = true;
var firebase = require("firebase");
var admin = require("firebase-admin");
var DBConfig_1 = require("../config/DBConfig");
var fire = require('../../fireconfig.json');
admin.initializeApp({
    credential: admin.credential.cert(fire),
    databaseURL: "https://beta-56978.firebaseio.com",
    storageBucket: "gs://beta-56978.appspot.com/"
});
exports.app = firebase.initializeApp(DBConfig_1.DBconfig.firebaseConfig);
exports.db = admin.firestore();
function DBinsertDocs(collectionName, key, ObjectToDB) {
    var setDoc = exports.db.collection(collectionName).doc('PDF' + key).set(ObjectToDB);
}
exports.DBinsertDocs = DBinsertDocs;
