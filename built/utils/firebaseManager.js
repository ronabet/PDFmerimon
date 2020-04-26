"use strict";
exports.__esModule = true;
var firebase = require("firebase");
var admin = require("firebase-admin");
var DBConfig_1 = require("../config/DBConfig");
var permissions = require('../config/fireconfig.json');
admin.initializeApp({
    credential: admin.credential.cert(permissions),
    databaseURL: DBConfig_1.DBconfig.databaseURL,
    storageBucket: DBConfig_1.DBconfig.storageBucket
});
exports.app = firebase.initializeApp(DBConfig_1.DBconfig.firebaseConfig);
exports.db = admin.firestore();
exports.collectionRef = exports.app.firestore().collection(DBConfig_1.DBconfig.collectionName);
