import {BASE_URL} from './Network';

const get = urlOption => {
  return fetch(BASE_URL + urlOption, {
    headers: {
      'content-type': 'application/json',
      Authorization: 'apikey 1Xq16jwQ5q00QaTaofv2iH:0HgQSSHY38hC4krZOvMiWx',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

const post = (urlOption, body) => {
  return fetch(BASE_URL + urlOption, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'apikey 1Xq16jwQ5q00QaTaofv2iH:0HgQSSHY38hC4krZOvMiWx',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
};

export {get, post};
