export const changeEmailValidate = (newEmail, password) => {
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const emailForm = validateEmail(newEmail);

  if (!newEmail || !password) {
    return 'Wszystkie pola powinny zostać wypełnione';
  } else if (!emailForm) {
    return 'Niepoprawny adres email';
  }
};

export const changePasswordValidation = (
  newPassword,
  repeatedNewPassword,
  oldPassword
) => {
  if (!newPassword || !repeatedNewPassword || !oldPassword) {
    return 'Wszystkie pola powinny zostać wypełnione';
  } else if (newPassword.length < 6 || newPassword.length > 40) {
    return 'Hasło powinno składać się z minimalnie 6, a maksymalnie 40 znaków';
  } else if (newPassword !== repeatedNewPassword) {
    return 'Wartości nowego hasła nie są identyczne';
  }
};
