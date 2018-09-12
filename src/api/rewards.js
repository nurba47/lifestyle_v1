import * as request from "./index";
import { REWARDS } from "../pathes";

export const get = userId => {
  return request.get(`${REWARDS}/${userId}`);
};

export const create = data => {
  return request.post(`${REWARDS}/`, data);
};

export const update = data => {
  return request.put(`${REWARDS}/`, data);
};
