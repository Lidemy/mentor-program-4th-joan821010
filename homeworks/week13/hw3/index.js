/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */

const accept = 'application/vnd.twitchtv.v5+json';
const clientID = '2ylkryijebslnpq1p88b69q61piwwi';
const topGamesApiUrl = 'https://api.twitch.tv/kraken/games/top';
let gameName;

async function getTopGames(apiUrl) {
  const response = await fetch(`${apiUrl}?limit=5`, {
    method: 'GET',
    headers: {
      Accept: accept,
      'Client-ID': clientID,
    },
  });
  let data;
  try {
    data = await response.json();
  } catch (err) {
    console.log('err', err);
    return;
  }
  const top = data.top;
  const topGames = [];
  for (let i = 0; i < top.length; i += 1) {
    topGames[i] = top[i].game.name;
  }
  const items = document.querySelectorAll('.header__lists-item');
  for (let i = 0; i < items.length; i += 1) {
    items[i].innerText = topGames[i];
  }

  changeGame(topGames[0]);
}

getTopGames(topGamesApiUrl);

function changeGame(game) {
  gameName = game;
  document.querySelector('.game__game-name').innerText = gameName;
  document.querySelector('.game__desc').innerText = 'Top 20 popular live streams sorted by current viewers';
  getStreams(streamsApiUrl);
}

const streamsApiUrl = 'https://api.twitch.tv/kraken/streams';

async function getStreams(apiUrl) {
  const response = await fetch(`${apiUrl}?game=${encodeURIComponent(gameName)}&&limit=20`, {
    method: 'GET',
    headers: {
      Accept: accept,
      'Client-ID': clientID,
    },
  });
  let data;
  try {
    data = await response.json();
  } catch (err) {
    console.log('err', err);
    return;
  }
  const element = document.querySelector('.game__streams');
  element.innerHTML = '';
  const streams = data.streams;
  for (const stream of streams) {
    const previewUrl = stream.preview.medium;
    const logoUrl = stream.channel.logo;
    const status = stream.channel.status;
    const name = stream.channel.name;
    const channelUrl = stream.channel.url;
    const item = document.createElement('div');
    item.classList.add('game__streams-stream');
    item.innerHTML = `
      <div class="game__streams-stream__preview">
        <a href=${channelUrl} target="_blank"><img src=${previewUrl}></a>
      </div>
      <div class="game__streams-stream__info">
        <div class="game__streams-stream__info__logo">
          <img src=${logoUrl}>
        </div>
        <div class="game__streams-stream__info__desc">
          <div class="game__streams-stream__info__desc-status">${status}</div>
          <div class="game__streams-stream__info__desc-name">${name}</div>
        </div>
      </div>
    `;
    element.appendChild(item);
  }
  for (let i = 0; i < 2; i += 1) {
    const item = document.createElement('div');
    item.classList.add('game__streams-stream');
    item.classList.add('hidden');
    item.innerHTML = `
      <div class="game__streams-stream__preview">
        <img src="">
      </div>
      <div class="game__streams-stream__info">
        <div class="game__streams-stream__info__logo">
          <img src="">
        </div>
        <div class="game__streams-stream__info__desc">
          <div class="game__streams-stream__info__desc-status"></div>
          <div class="game__streams-stream__info__desc-name"></div>
        </div>
      </div>
    `;
    element.appendChild(item);
  }
}

document.querySelector('.header__lists').addEventListener('click', (e) => {
  if (e.target.classList.contains('header__lists-item')) {
    changeGame(e.target.innerText);
  }
});
