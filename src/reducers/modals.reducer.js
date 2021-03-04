import {
  OPEN_LOGIN_AND_REGISTER_MODAL,
  CLOSE_LOGIN_AND_REGISTER_MODAL,
  OPEN_CHANGE_EMAIL_AND_PASSWORD_MODAL,
  CLOSE_CHANGE_EMAIL_AND_PASSWORD_MODAL,
} from 'constants/index';

const initialState = {
  isLoginAndRegisterModalOpen: false,
  isChangeLoginAndRegisterModalOpen: false,
};

function modals(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN_AND_REGISTER_MODAL:
      return {
        ...state,
        isLoginAndRegisterModalOpen: true,
      };

    case CLOSE_LOGIN_AND_REGISTER_MODAL:
      return {
        ...state,
        isLoginAndRegisterModalOpen: false,
      };

    case OPEN_CHANGE_EMAIL_AND_PASSWORD_MODAL:
      return {
        ...state,
        isChangeLoginAndRegisterModalOpen: true,
      };

    case CLOSE_CHANGE_EMAIL_AND_PASSWORD_MODAL:
      return {
        ...state,
        isChangeLoginAndRegisterModalOpen: false,
      };

    default:
      return state;
  }
}

export default modals;
