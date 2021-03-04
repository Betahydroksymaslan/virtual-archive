import {
  LOADING_STATES,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_EMAIL_REQUEST,
  CHANGE_EMAIL_FAILURE,
} from 'constants/index';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, user, loadingState: {} }
  : { isLoggedIn: false, user: null, loadingState: {} };

function auth(state = initialState, action) {
  const newLoadingState = { ...state.loadingState };
  const { type, payload } = action;

  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [type]: LOADING_STATES.LOADING,
        },
      };
    case REGISTER_SUCCESS:
      delete newLoadingState.REGISTER_REQUEST;

      return {
        ...state,
        isLoggedIn: false,
        loadingState: newLoadingState,
      };
    case REGISTER_FAILURE:
      delete newLoadingState.REGISTER_REQUEST;

      return {
        ...state,
        isLoggedIn: false,
        loadingState: newLoadingState,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
          [type]: LOADING_STATES.LOADING,
        },
      };
    case LOGIN_SUCCESS:
      delete newLoadingState.LOGIN_REQUEST;
      if (payload.data.token)
        localStorage.setItem('user', JSON.stringify(payload.data));

      return {
        ...state,
        isLoggedIn: true,
        user: payload.data,
        loadingState: newLoadingState,
      };
    case LOGIN_FAILURE:
      delete newLoadingState.LOGIN_REQUEST;

      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loadingState: newLoadingState,
      };

    case LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };

    case CHANGE_EMAIL_REQUEST:
      return {
        ...state,
        [type]: LOADING_STATES.LOADING,
      };

    case CHANGE_EMAIL_SUCCESS:
      delete newLoadingState.CHANGE_EMAIL_REQUEST;

      let userData = JSON.parse(localStorage.getItem('user'));
      userData = { ...userData, email: payload.data.email };
      localStorage.setItem('user', JSON.stringify(userData));

      return {
        ...state,
        user: {
          ...user,
          email: payload.data.email,
        },
      };

    default:
      return state;
  }
}

export default auth;
