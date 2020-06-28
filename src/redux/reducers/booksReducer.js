import {
  getAllBooksAction,
  getAllBooksByStatusAction,
  pending,
  rejected,
  fulfilled,
} from "../actions/actionTypes";

const initialValue = {
  books: [],
  booksByStatus: [],
  book: {},
  pagination: {},
  paginationByStatus: {},
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
    case getAllBooksByStatusAction + pending:
      return {
        ...prevState,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getAllBooksByStatusAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isLoading: false,
      };
    case getAllBooksByStatusAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isLoading: false,
        booksByStatus: action.payload.data.data,
        paginationByStatus: action.payload.data.pagination,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default books;
