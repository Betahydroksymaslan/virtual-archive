import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, ValidationMessage } from './LoginForm.styles';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'actions/auth.action';
import {
  validateLoginState,
  validateLoginMessage,
} from 'helpers/authValidation';

const initialState = {
  username: '',
  password: '',
  message: '',
};

const LoginForm = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const { errorMessage } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  const clearInputs = () => setInputValue(initialState);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const signInHandler = (e) => {
    e.preventDefault();

    const { username, password } = inputValue;

    if (validateLoginState(username, password)) {
      return setInputValue({ ...inputValue, message: validateLoginMessage });
    }
    dispatch(login(password, username));

    clearInputs();
  };

  return (
    <Form onSubmit={signInHandler}>
      <Input
        value={inputValue.username}
        name="username"
        onChange={onInputChange}
        placeholder="Nazwa użytkownika"
        type="text"
      />
      <Input
        value={inputValue.password}
        name="password"
        onChange={onInputChange}
        placeholder="Hasło"
        type="password"
      />
      <ValidationMessage>{inputValue.message}</ValidationMessage>
      <Button type="submit">ZALOGUJ SIĘ</Button>
    </Form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
