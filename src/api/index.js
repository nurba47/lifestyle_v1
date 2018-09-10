let headers = new Headers();
headers.append("Accept", "application/json");
headers.append("Content-Type", "application/json");

let init = {
  headers: headers
};

export const post = (url, data) => {
  init.method = "POST";
  init.body = data;
  return fetch(url, init);
};

export const get = (url, data) => {
  init.method = "GET";
  init.body = data;

  return fetch(url, init);
};
