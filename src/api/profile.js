import { post } from "./index";
import { TREE } from "../pathes";

export const getReferrals = () => {
  return post(TREE);
};
