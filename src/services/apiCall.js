import { SEND_ERROR_MESSAGE, GET_ERROR_MESSAGE } from '../data/constant';

export function doGetApiCall(url) {
  return fetch(url)
    .then(
      (response) => response.json(),
    ).catch((error) => {
      console.error(GET_ERROR_MESSAGE, error);
    });
}

export function doPostApiCall(url, data) {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  };
  return fetch(url, params)
    .then(
      (response) => response,
    ).catch(
      (error) => { console.error(SEND_ERROR_MESSAGE, error); },
    );
}

export function doDeleteApiCall(url) {
  const params = {
    method: 'DELETE',
  };
  return fetch(url, params)
    .then(
      (response) => response,
    ).catch(
      (error) => { console.error(SEND_ERROR_MESSAGE, error); },
    );
}

export function doPutApiCall(url, data) {
  const params = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  };
  return fetch(url, params)
    .then(
      (response) => response,
    ).catch(
      (error) => { console.error(SEND_ERROR_MESSAGE, error); },
    );
}
