import { getAllBooksAction } from "./actionTypes";
import { getAllBooks } from "../../utils/http";

export const getAllBooksActionCreator = (requestData) => {
  return {
    type: getAllBooksAction,
    payload: getAllBooks(requestData),
  };
};
