import Axios from "axios";

export const URL_API = process.env.REACT_APP_URL_API;

// books
export const getAllBooks = (requestData) => {
  return Axios.get(`${URL_API}/books?${requestData}`);
};

export const postLogin = (body) => {
  return Axios.post(`${URL_API}/auth/login`, body);
};
