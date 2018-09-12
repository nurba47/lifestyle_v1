import { get, post } from "./index";
import { LOGIN, USERS } from "../pathes";

// ADMIN only can access
export const getAllUsers = () => {
  return get(USERS);
};

export const register = user => {
  return post(USERS, { user });
};

export const login = user => {
  return post(LOGIN, { user });
};
