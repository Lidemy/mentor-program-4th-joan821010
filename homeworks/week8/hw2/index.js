/* eslint-disable  no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
const accept = 'application/vnd.twitchtv.v5+json';
const clientID = '2ylkryijebslnpq1p88b69q61piwwi';

const topGamesApiUrl = 'https://api.twitch.tv/kraken/games/top';
const topGamesXhr = new XMLHttpRequest();

function getTopGames(apiUrl, xhr) {
  xhr.open('GET', `${apiUrl}?limit=5`, true);
  xhr.setRequestHeader('Accept', accept);
  xhr.setRequestHeader('Client-ID', clientID);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      let data;
      try {
        data = JSON.parse(xhr.response);
      } catch (e) {
        console.log('getTopGamesE:', e);
        return;
      }

      const top = data.top;
      const topGames = [];
      for (let i = 0; i < top.length; i += 1) {
        topGames[i] = top[i].game.name;
      }
      console.log(topGames);
      const items = document.querySelectorAll('.header__lists-item');
      for (let i = 0; i < items.length; i += 1) {
        items[i].innerText = topGames[i];
        console.log(items[i].innerText);
      }
    } else {
      console.log('getTopGamesErr');
    }
  };
  xhr.onerror = function () {
    console.log('getTopGamesError');
  };

  xhr.send();
}

getTopGames(topGamesApiUrl, topGamesXhr);


const streamsApiUrl = 'https://api.twitch.tv/kraken/streams';
const streamsXhr = new XMLHttpRequest();

function getStreams(apiUrl, xhr) {
  xhr.open('GET', `${apiUrl}?game=${encodeURIComponent(gameName)}&&limit=20`, true);
  xhr.setRequestHeader('Accept', accept);
  xhr.setRequestHeader('Client-ID', clientID);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      let data;
      try {
        data = JSON.parse(xhr.response);
      } catch (e) {
        console.log('getStreamsE:', e);
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
    } else {
      console.log('getStreamsErr');
    }
  };
  xhr.onerror = function () {
    console.log('getStreamsError');
  };

  xhr.send();
}

let gameName;
document.querySelector('.header__lists').addEventListener('click', (e) => {
  if (e.target.classList.contains('header__lists-item')) {
    gameName = e.target.innerText;
    document.querySelector('.game__game-name').innerText = gameName;
    document.querySelector('.game__desc').innerText = 'Top 20 popular live streams sorted by current viewers';
    getStreams(streamsApiUrl, streamsXhr);
  }
});
