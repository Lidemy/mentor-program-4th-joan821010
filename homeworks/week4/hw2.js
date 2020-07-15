const request = require('request');
const process = require('process');

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';
const args = process.argv;
const action = args[2];
const param = args[3];

/* eslint-disable consistent-return */
function listBooks() {
  request.get(
    `${API_ENDPOINT}/books?_limit=20`,
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
}

function readBook(id) {
  request.get(
    `${API_ENDPOINT}/books/${id}`,
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
      console.log(json.name);
    },
  );
}

function deleteBook(id) {
  request.delete(
    `${API_ENDPOINT}/books/${id}`,
    (err, res) => {
      if (err) {
        return console.log('刪除失敗', err);
      }
      if (res.statusCode >= 200 && res.statusCode < 300) {
        console.log('刪除成功');
      }
    },
  );
}

function createBook(name) {
  if (!name) {
    return console.log('未輸入書名');
  }
  request.post(
    {
      url: `${API_ENDPOINT}/books`,
      form: {
        name,
      },
    },
    (err) => {
      if (err) {
        return console.log('新增失敗', err);
      }
      console.log('新增成功');
    },
  );
}

function updateBook(id, name) {
  if (!id || !name) {
    return console.log('未輸入 id 或書名');
  }
  request.patch(
    {
      url: `${API_ENDPOINT}/books/${id}`,
      form: {
        name,
      },
    },
    (err) => {
      if (err) {
        return console.log('更新失敗', err);
      }
      console.log('更新成功');
    },
  );
}

switch (action) {
  case 'list':
    listBooks();
    break;
  case 'create':
    createBook(param);
    break;
  case 'read':
    readBook(param);
    break;
  case 'update':
    updateBook(param, args[4]);
    break;
  case 'delete':
    deleteBook(param);
    break;
  default:
    console.log('Available commands: list, create, read, update and delete');
}
