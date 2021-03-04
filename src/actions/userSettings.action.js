import { CHANGE_EMAIL, CHANGE_PASSWORD } from 'constants/index';
import { changeUserEmail, changeUserPassword } from 'helpers/user.service';

export const changeEmail = (newEmail, password, id) => {
  const promise = changeUserEmail(newEmail, password, id);

  return {
    type: CHANGE_EMAIL,
    promise,
    message: 'Pomyślnie zmieniono email!',
  };
};

export const changePassword = (
  newPassword,
  newPasswordRepeated,
  oldPassword,
  id
) => {
  const promise = changeUserPassword(
    newPassword,
    newPasswordRepeated,
    oldPassword,
    id
  );

  return {
    type: CHANGE_PASSWORD,
    promise,
    message: 'Pomyślnie zmieniono hasło!',
  };
};
