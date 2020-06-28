import { getAllBooksAction, getAllBooksByStatusAction } from "./actionTypes";
import { getAllBooks, getAllBooksByStatus } from "../../utils/http";

export const getAllBooksActionCreator = (requestData) => {
  return {
    type: getAllBooksAction,
    payload: getAllBooks(requestData),
  };
};

export const getAllBooksByStatusActionCreator = (requestData) => {
  return {
    type: getAllBooksByStatusAction,
    payload: getAllBooksByStatus(requestData),
  };
};
