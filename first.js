//my first test JS

// import clashApi from 'node_modules/clash-of-clans-api';
const clashApi = require('clash-of-clans-api');
var client = clashApi({
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg0YmY4MGE1LTY4OTQtNGU3ZC04YTI3LWY4OWQ3ZDE1ODgyNSIsImlhdCI6MTUyMzQ2MDQxNSwic3ViIjoiZGV2ZWxvcGVyLzAzMWQwZDgwLThiOWUtZjdmNS02OWVkLTIzYzUxZGIzMTNkYyIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4LjIxNy4xMjIuMTYxIl0sInR5cGUiOiJjbGllbnQifV19.bppIhQjKVfU2rv7JiZH0RvXDxNpNumQer2AIynLnIFJrJZFPocXzZcmG6o0XVhZakK86qYg6nVviYyEfpZqifg"
});


client
    .clanByTag('#29YR22QY')
    .then(response => console.log(response))
    .catch(err => console.log(err));
