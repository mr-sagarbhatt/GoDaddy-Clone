import axios from "axios";
import axiosInstance from "./AuthServices";

const ACCOUNT_API_BASE_URL = process.env.REACT_APP_API_BASE_URL + `users`;
const API_URL = `users`;

const createAccount = async (user) => {
  return await axios.post(ACCOUNT_API_BASE_URL, user);
};

const userLogin = async (user) => {
  return await axios.post(ACCOUNT_API_BASE_URL + `/login`, user);
};

const getLoggedUser = async () => {
  return await axiosInstance().get(API_URL);
};

export { createAccount, userLogin, getLoggedUser };
