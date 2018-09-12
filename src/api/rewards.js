import * as request from "./index";
import { REWARDS, REWARDS_OF_USER } from "../pathes";

// when user makes request
export const getForUser = () => {
  return request.get(`${REWARDS_OF_USER}`);
};

export const get = userId => {
  return request.get(`${REWARDS}/${userId}`);
};

export const create = data => {
  return request.post(`${REWARDS}/`, data);
};

export const update = data => {
  return request.put(`${REWARDS}/`, data);
};
