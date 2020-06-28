import { combineReducers } from "redux";
import books from "./booksReducer";
import auth from "./authReducer";
import transactions from "./transactionReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
  books,
  auth,
  transactions,
  users,
});

export default rootReducer;
