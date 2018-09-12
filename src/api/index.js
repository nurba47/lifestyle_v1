import axios from "axios";
import authCtrl from "../controllers/auth";
import { BASE } from "../pathes";

const instance = axios.create({
  baseURL: BASE,
  timeout: 30000,
  responseType: "json",
  headers: {}
});

instance.interceptors.request.use(function(config) {
  let { user } = authCtrl;
  if (user) config.headers.Authorization = `Token ${user.token}`;
  return config;
});

export function get(url, param) {
  return new Promise(function(resolve, reject) {
    instance
      .get(url, { params: param })
      .then(resp => {
        if (resp && resp.data) {
          resolve(resp.data);
        } else {
          reject(null);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function post(url, param) {
  param = param || {};
  return new Promise(function(resolve, reject) {
    instance
      .post(url, param)
      .then(resp => {
        if (resp && resp.data) {
          resolve(resp.data);
        } else {
          reject(null);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function put(url, param) {
  param = param || {};
  return new Promise(function(resolve, reject) {
    instance
      .put(url, param)
      .then(resp => {
        if (resp && resp.data) {
          resolve(resp.data);
        } else {
          reject(null);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
