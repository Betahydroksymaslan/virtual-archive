export const validateRegistration = (username, password, email) => {
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const emailForm = validateEmail(email);

  if (!username || !password || !email) {
    return 'Wszystkie pola powinny zostać wypełnione';
  } else if (username.length < 3 || username.length > 20) {
    return 'Nazwa użytkownika powinno składać się z minimalnie 3, a maksymalnie 20 znaków';
  } else if (password.length < 6 || password.length > 40) {
    return 'Hasło powinno składać się z minimalnie 6, a maksymalnie 40 znaków';
  } else if (!emailForm) {
    return 'Niepoprawny adres email';
  } else if (email.length > 50) {
    return 'Email powinien składać się z maksymalnie 50 znaków';
  }
};

export const validateLoginMessage = 'Wszystkie pola powinny zostać wypełnione';

export const validateLoginState = (username, password) => {
  return !username || !password;
};
