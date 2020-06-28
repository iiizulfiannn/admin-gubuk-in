import { getAllTransactionsAction } from "./actionTypes";
import { getAllTransaction } from "../../utils/http";

export const getAllTransactionsActionCreator = (token) => {
  return {
    type: getAllTransactionsAction,
    payload: getAllTransaction(token),
  };
};
