var config = require('config'); //needed for config
var clashApi = require('clash-of-clans-api');// import clashApi from 'node_modules/clash-of-clans-api';
var APIclient = clashApi(config.get('clashToken'));
var firebase = require('firebase')
var fbcommands = require('./fbconfig.js')

/*
var database = firebase.database();
var playersRef = database.ref("players");
var clansRef = database.ref("clans");
//  clansRef.update(data)



module.exports.playersRef = playersRef;
module.exports.saveClan = (data) => clansRef.update(data);
*/
//Redis
var redis2 = require('ioredis');
var redis = redis2.createClient();

redis.on('error', function (err) {
    console.log('Something went wrong ', err)
});

APIclient
    .clanByTag('#29YR22QY')
    .then(response => {
        var tag = "29YR22QY";
        var data = { "members3": response.members };
        var newData = {};
        newData[tag] = data;
        fbcommands.saveClan(newData)
    })
    .catch(err => console.log(err));

redis.get('my test key', function (error, result) {
    if (error) throw error;
    console.log(result)
});
