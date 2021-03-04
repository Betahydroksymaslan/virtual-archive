import {
  OPEN_LOGIN_AND_REGISTER_MODAL,
  CLOSE_LOGIN_AND_REGISTER_MODAL,
  OPEN_CHANGE_EMAIL_AND_PASSWORD_MODAL,
  CLOSE_CHANGE_EMAIL_AND_PASSWORD_MODAL,
} from 'constants/index';

export const openLoginAndRegisterModal = () => {
  return {
    type: OPEN_LOGIN_AND_REGISTER_MODAL,
  };
};

export const closeLoginAndRegisterModal = () => {
  return {
    type: CLOSE_LOGIN_AND_REGISTER_MODAL,
  };
};

export const openChangeEmailAndPasswordModal = () => {
  return {
    type: OPEN_CHANGE_EMAIL_AND_PASSWORD_MODAL,
  };
};

export const closeChangeEmailAndPasswordModal = () => {
  return {
    type: CLOSE_CHANGE_EMAIL_AND_PASSWORD_MODAL,
  };
};
