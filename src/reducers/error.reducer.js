import { SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE } from 'constants/index';

const initialState = {
  errorMessage: '',
};

function error(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: payload.message,
      };

    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: '',
      };

    default:
      return state;
  }
}

export default error;
