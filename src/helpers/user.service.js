import axios from 'axios';
import authHeader from 'helpers/auth-header';

const requestBoard = axios.create({
  baseURL: 'http://localhost:8080/archive/api/v1/test/',
  validateStatus: false,
});

export const getPublicContent = async () => {
  return await requestBoard.get('all');
};

export const getUserBoard = async () => {
  return await requestBoard.get('user', { headers: authHeader() });
};

export const getModeratorBoard = async () => {
  return await requestBoard.get('mod', { headers: authHeader() });
};

export const getAdminBoard = async () => {
  return await requestBoard.get('admin', { headers: authHeader() });
};

export const changeUserEmail = async (newEmail, password, id) => {
  return await axios.put(
    `http://localhost:8080/archive/api/v1/users/${id}/email`,
    {
      newEmail,
      password,
    },
    { headers: authHeader() }
  );
};

export const changeUserPassword = async (
  newPassword,
  newPasswordRepeated,
  oldPassword,
  id
) => {
  return await axios.put(
    `http://localhost:8080/archive/api/v1/users/${id}/password`,
    {
      newPassword,
      newPasswordRepeated,
      oldPassword,
    },
    { headers: authHeader() }
  );
};
