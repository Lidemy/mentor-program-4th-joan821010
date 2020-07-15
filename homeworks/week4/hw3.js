const request = require('request');
const process = require('process');

const name = process.argv[2];
/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable consistent-return */
request.get(
	`https://restcountries.eu/rest/v2/name/${name}`,
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

		if (res.statusCode === 404) {
			return console.log('找不到國家資訊');
		}
		for (let i = 0; i < json.length; i += 1) {
			console.log('============');
			console.log(`國家：${json[i].name}`);
			console.log(`首都：${json[i].capital}`);
			console.log(`貨幣：${json[i].currencies[0].code}`);
			console.log(`國碼：${json[i].callingCodes[0]}`);
		}
	},
);
