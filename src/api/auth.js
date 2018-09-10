import { post, get } from "./index";
import { LOGIN, USERS, TREE } from "../pathes";

export const register = user => {
  return post(USERS, JSON.stringify({ user }));
};

export const login = user => {
  return post(LOGIN, JSON.stringify({ user }));
};

export const getReferrals = token => {
  // TODO: COMPLETE THIS
  return get(TREE);
};
