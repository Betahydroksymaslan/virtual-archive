import { toast } from 'react-toastify';

const notificationsMiddleware = () => (next) => (action) => {
  const successType =
    /(.*)_(SUCCESS)/.test(action.type) || /(.*)(LOGOUT)/.test(action.type);

  const failureType = /(.*)_(FAILURE)/.test(action.type);

  if (action.message && successType) {
    toast.success(action.message);
  } else if (action.message && failureType) {
    toast.error(action.payload.message);
  }

  next(action);
};

export default notificationsMiddleware;
