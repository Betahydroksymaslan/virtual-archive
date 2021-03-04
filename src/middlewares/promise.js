import { SET_ERROR_MESSAGE } from 'constants/index';
import { CLOSE_LOGIN_AND_REGISTER_MODAL } from 'constants/index';

const promiseMiddleware = () => (next) => (action) => {
  const { promise, type, ...rest } = action;

  if (!promise && typeof promise !== 'function') {
    return next(action);
  }

  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const REQUEST = `${type}_REQUEST`;

  next({ type: REQUEST, ...rest });

  return promise
    .then((response) => {
      next({ type: SUCCESS, ...rest, payload: response });
      next({
        type: CLOSE_LOGIN_AND_REGISTER_MODAL,
      });
    })
    .catch((error) => {
      next({ type: FAILURE, ...rest, payload: error.response.data });
      next({ type: SET_ERROR_MESSAGE, ...rest, payload: error.response.data });
    });
};

export default promiseMiddleware;
