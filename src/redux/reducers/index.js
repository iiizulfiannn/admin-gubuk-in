import { combineReducers } from "redux";
import books from "./booksReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
  books,
  auth,
});

export default rootReducer;
