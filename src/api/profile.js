import { get } from "./index";
import { TREE } from "../pathes";

export const getReferrals = () => {
  return get(TREE);
};
