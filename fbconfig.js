var firebase = require("firebase");
var config = require('config');

firebase.initializeApp(config.get('fbToken'));
var database = firebase.database();
