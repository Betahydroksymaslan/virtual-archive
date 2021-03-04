import { CLEAR_ERROR_MESSAGE } from 'constants/index';

export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE,
  };
};
