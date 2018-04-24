//my first test JS
var config = require('config');
// import clashApi from 'node_modules/clash-of-clans-api';
var clashApi = require('clash-of-clans-api');
var APIclient = clashApi(config.get('clashToken'));
var playersRef = require('./fbconfig.js')
//var playersRef = database.ref("players");
var clansRef = require('./fbconfig.js')
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
        var data = { "members2": response.members };
        var newData = {};
        newData[tag] = data;
        clansRef.update(newData)
    })
    .catch(err => console.log(err));

redis.get('my test key', function (error, result) {
    if (error) throw error;
    console.log(result)
});
