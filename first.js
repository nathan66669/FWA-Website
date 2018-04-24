//my first test JS
import config from 'config';
// import clashApi from 'node_modules/clash-of-clans-api';
const clashApi = require('clash-of-clans-api');
const APIclient = clashApi(config.get('clashToken'));
const clansRef = require('fbconfig')
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
        var update = {};
        update[tag] = data;
        clansRef.update(update)
    })
    .catch(err => console.log(err));

redis.get('my test key', function (error, result) {
    if (error) throw error;
    console.log(result)
});
