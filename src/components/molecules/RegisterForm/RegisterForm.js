import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, ValidationMessage } from './RegisterForm.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { useDispatch } from 'react-redux';
import { register } from 'actions/auth.action';
import { validateRegistration } from 'helpers/authValidation';

const initialState = {
  username: '',
  password: '',
  email: '',
  message: '',
};

const RegisterForm = () => {
  const [inputValue, setInputValue] = useState(initialState);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const clearInputs = () => setInputValue(initialState);
  const dispatch = useDispatch();

  const signUpHandler = (e) => {
    e.preventDefault();
    const { email, password, username } = inputValue;
    const validationMessage = validateRegistration(username, password, email);

    if (validationMessage) {
      return setInputValue({
        ...inputValue,
        message: validationMessage,
      });
    }

    dispatch(register(email, password, username));
    clearInputs();
  };

  return (
    <Form noValidate onSubmit={signUpHandler}>
      <Input
        name="username"
        value={inputValue.username}
        onChange={onInputChange}
        placeholder="Nazwa użytkownika"
        type="text"
      />
      <Input
        name="password"
        value={inputValue.password}
        onChange={onInputChange}
        placeholder="Hasło"
        type="password"
      />
      <Input
        name="email"
        value={inputValue.email}
        onChange={onInputChange}
        placeholder="Email"
        type="email"
      />
      <ValidationMessage>{inputValue.message}</ValidationMessage>
      <Button type="submit">ZAREJESTRUJ SIĘ</Button>
    </Form>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
