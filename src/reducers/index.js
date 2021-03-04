import { combineReducers } from 'redux';
import auth from './auth.reducer';
import error from './error.reducer';
import modals from './modals.reducer';

const rootReducer = combineReducers({
  auth,
  error,
  modals,
});

export default rootReducer;
