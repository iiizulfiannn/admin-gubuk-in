import {
  getAllBooksAction,
  pending,
  rejected,
  fulfilled,
} from "../actions/actionTypes";

const initialValue = {
  books: [],
  book: {},
  pagination: {},
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  message: "",
};

const books = (prevState = initialValue, action) => {
  switch (action.type) {
    case getAllBooksAction + pending:
      return {
        ...prevState,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getAllBooksAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isLoading: false,
      };
    case getAllBooksAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isLoading: false,
        books: action.payload.data.data,
        pagination: action.payload.data.pagination,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default books;
