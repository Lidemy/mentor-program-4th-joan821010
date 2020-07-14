const request = require('request');

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';
/* eslint-disable consistent-return */
request.get(
  `${API_ENDPOINT}/books?_limit=10`,
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

    for (let i = 0; i < json.length; i += 1) {
      console.log(`${json[i].id} ${json[i].name}`);
    }
  },
);
