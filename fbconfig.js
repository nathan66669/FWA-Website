var firebase = require("firebase");

firebase.initializeApp(config.get(fbConfig));
var database = firebase.database();
var playersRef = database.ref("players");
var clansRef = database.ref("clans");