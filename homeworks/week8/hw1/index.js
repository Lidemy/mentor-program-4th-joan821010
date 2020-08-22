document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.classList.contains('raffle-block__btn')) {
    if (document.querySelector('.raffle-block')) {
      document.querySelector('section').removeChild(document.querySelector('.raffle-block'));
      document.querySelector('section').classList.remove('raffle');
    }

    const request = new XMLHttpRequest();
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        console.log(request.responseText);
        console.log(JSON.parse(request.responseText).prize);

        if (JSON.parse(request.responseText).prize === 'FIRST') {
          document.querySelector('section').outerHTML = `
            <section class="first">
              <div>恭喜你中頭獎了！日本東京來回雙人遊！</div>
              <button class="raffle-block__btn">我要抽獎</button>
            </section>
          `;
        }

        if (JSON.parse(request.responseText).prize === 'SECOND') {
          document.querySelector('section').outerHTML = `
            <section class="second">
              <div>二獎！90 吋電視一台！</div>
              <button class="raffle-block__btn">我要抽獎</button>
            </section>
          `;
        }

        if (JSON.parse(request.responseText).prize === 'THIRD') {
          document.querySelector('section').outerHTML = `
            <section class="third">
              <div>恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！</div>
              <button class="raffle-block__btn">我要抽獎</button>
            </section>
          `;
        }

        if (JSON.parse(request.responseText).prize === 'NONE') {
          document.querySelector('section').outerHTML = `
            <section class="none">
              <div>銘謝惠顧</div>
              <button class="raffle-block__btn">我要抽獎</button>
            </section>
          `;
        }
      } else {
        alert('系統不穩定，請再試一次');
      }
    };

    request.onerror = function () {
      console.log('error');
    };

    request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
    request.send();
  }
});
