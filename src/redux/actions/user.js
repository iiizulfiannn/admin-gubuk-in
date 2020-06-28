import { getAllUsersAction } from "./actionTypes";
import { getAllUsers } from "../../utils/http";

export const getAllUsersActionCreator = (token) => {
  return {
    type: getAllUsersAction,
    payload: getAllUsers(token),
  };
};
