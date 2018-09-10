import { post } from "./index";
import { LOGIN, USERS } from "../pathes";

export const register = user => {
  return post(USERS, user);
};

export const login = user => {
  return post(LOGIN, { user });
};
