import axios from 'axios';

const API_URL = 'http://localhost:8080/archive/api/v1/auth/';

export const register = async (email, password, username) => {
  return await axios.post(API_URL + 'signup', {
    email,
    password,
    username,
  });
};

export const login = async (password, username) => {
  return await axios.post(API_URL + 'signin', {
    password,
    username,
  });
};
