var firebase = require("firebase");
var config = require('config');

firebase.initializeApp(config.get('firebaseConfiguration'));
var database = firebase.database();
