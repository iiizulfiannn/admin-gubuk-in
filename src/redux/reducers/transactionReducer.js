import {
  getAllTransactionsAction,
  pending,
  rejected,
  fulfilled,
} from "../actions/actionTypes";

const initialValue = {
  transactions: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const transactions = (prevState = initialValue, action) => {
  switch (action.type) {
    case getAllTransactionsAction + pending:
      return {
        ...prevState,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case getAllTransactionsAction + rejected:
      return {
        ...prevState,
        isRejected: true,
        isLoading: false,
      };
    case getAllTransactionsAction + fulfilled:
      return {
        ...prevState,
        isFulfilled: true,
        isLoading: false,
        transactions: action.payload.data.data,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default transactions;
