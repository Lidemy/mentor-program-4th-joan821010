const request = require('request');

const CLIEND_ID = '2ylkryijebslnpq1p88b69q61piwwi';
/* eslint-disable consistent-return */
request(
  {
    method: 'GET',
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': CLIEND_ID,
    },
  },
  (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    let json;
    try {
      json = JSON.parse(body);
    } catch (e) {
      return console.log(e);
    }
    for (let i = 0; i < json.top.length; i += 1) {
      console.log(json.top[i].viewers, json.top[i].game.name);
    }
  },
);
