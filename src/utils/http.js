import Axios from "axios";
// import qs from "querystring";

export const URL_API = process.env.REACT_APP_URL_API;

// books
export const getAllBooks = (requestData) => {
  return Axios.get(`${URL_API}/books?${requestData}`);
};

export const deleteBookById = (id, token) => {
  const config = {
    headers: { Authorization: token },
  };
  return Axios.delete(`${URL_API}/books/${id}`, config);
};

export const postLogin = (body) => {
  return Axios.post(`${URL_API}/auth/login`, body);
};

export const changeStatusBook = (id, data, token) => {
  // console.log(id, qs.stringify(data), token);
  const config = {
    headers: { Authorization: token },
  };
  return Axios.put(`${URL_API}/books/${id}`, data, config);
};

export const refreshToken = (token) => {
  return Axios.post(`${URL_API}/auth/token`, token);
};

export const getAllTransaction = (token) => {
  const config = {
    headers: { Authorization: token },
  };
  return Axios.get(`${URL_API}/transaction`, config);
};

export const getAllUsers = (token) => {
  const config = {
    headers: { Authorization: token },
  };
  return Axios.get(`${URL_API}/user`, config);
};
