import { encryptData, decryptData } from "./crypto-data";

// *********** GET USER TOKEN ***********
const getToken = () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      return decryptData(token);
    }
  } catch (err) {
    console.log(err.message);
  }
};

const userToken = getToken();

// *********** SET USER TOKEN ***********
const setToken = (token) => {
  try {
    if (!userToken) {
      localStorage.setItem("token", encryptData(token));
    }
  } catch (err) {
    console.log(err.message);
  }
};

// *********** REMOVE USER TOKEN ***********
const removeToken = () => {
  try {
    if (userToken) {
      localStorage.removeItem("token");
    }
  } catch (err) {
    console.log(err.message);
  }
};

export { setToken, getToken, removeToken };
