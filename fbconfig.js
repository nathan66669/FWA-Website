var firebase = require("firebase");
var config = require('config');

firebase.initializeApp(config.get('firebaseConfiguration'));

var database = firebase.database();
var playersRef = database.ref("players");
var clansRef = database.ref("clans");
var saveClan =  function(data){
    clansRef.update(data)
}

module.exports.playersRef = playersRef;
module.exports.saveClan = saveClan;

