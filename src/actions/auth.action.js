import { REGISTER, LOGIN, LOGOUT } from 'constants/index';
import {
  register as userRegister,
  login as userLogin,
} from 'helpers/auth.service';

export const register = (email, password, username) => {
  const promise = userRegister(email, password, username);

  return {
    type: REGISTER,
    promise,
    message: 'Pomyślnie zarejestrowano',
  };
};

export const login = (password, username) => {
  const promise = userLogin(password, username);

  return {
    type: LOGIN,
    promise,
    message: 'Pomyślnie zalogowano',
  };
};

export const logout = () => ({
  type: LOGOUT,
  message: 'Pomyślnie wylogowano',
});
