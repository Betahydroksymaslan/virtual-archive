import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/atoms/Modal/Modal';
import { ModalWrapper, ValidationWarningMessage } from './SettingsModals.style';
import ExitButton from 'components/atoms/ExitButton/ExitButton';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import StyledLabel from 'components/atoms/StyledLabel/StyledLabel';
import {
  changeEmailValidate,
  changePasswordValidation,
} from 'helpers/userSettings.Validation';
import { changeEmail, changePassword } from 'actions/userSettings.action';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
  newEmail: '',
  password: '',
  newPassword: '',
  repeatedNewPassword: '',
  oldPassword: '',
  message: '',
};

const SettingsModals = ({ isOpen, handleOnClose, modalType }) => {
  const [inputValue, setInputValue] = useState(initialState);
  const {
    newEmail,
    password,
    newPassword,
    repeatedNewPassword,
    oldPassword,
    message,
  } = inputValue;
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const changeUserEmail = (e) => {
    e.preventDefault();

    const changingEmailValidation = changeEmailValidate(newEmail, password);

    if (changingEmailValidation) {
      return setInputValue({
        ...inputValue,
        message: changingEmailValidation,
      });
    }

    dispatch(changeEmail(newEmail, password, currentUser.id));
  };

  const changeUserPassword = (e) => {
    e.preventDefault();
    const changePasswortValidationResult = changePasswordValidation(
      newPassword,
      repeatedNewPassword,
      oldPassword
    );

    if (changePasswortValidationResult) {
      return setInputValue({
        ...inputValue,
        message: changePasswortValidationResult,
      });
    }

    dispatch(
      changePassword(
        newPassword,
        repeatedNewPassword,
        oldPassword,
        currentUser.id
      )
    );
  };

  return (
    <Modal
      shouldBeClosedOnOutsideClick={true}
      isOpen={isOpen}
      handleOnClose={handleOnClose}
    >
      {modalType === 'CHANGE_EMAIL' ? (
        <ModalWrapper>
          <ExitButton onClick={handleOnClose} />
          <StyledLabel>
            Nowy email:
            <Input
              value={newEmail}
              name="newEmail"
              onChange={onInputChange}
              placeholder="example@xx.com"
              marginTop="1em"
              type="email"
            />
          </StyledLabel>
          <StyledLabel>
            Hasło:
            <Input
              value={password}
              name="password"
              onChange={onInputChange}
              placeholder="password"
              marginTop="1em"
              type="password"
            />
          </StyledLabel>
          <ValidationWarningMessage>{message}</ValidationWarningMessage>
          <Button onClick={changeUserEmail}>Zmień</Button>
        </ModalWrapper>
      ) : (
        <ModalWrapper>
          <ExitButton onClick={handleOnClose} />
          <StyledLabel>
            Nowe hasło:
            <Input
              value={newPassword}
              name="newPassword"
              onChange={onInputChange}
              placeholder="new password"
              marginTop="1em"
              type="password"
            />
          </StyledLabel>
          <StyledLabel>
            Powtórz hasło:
            <Input
              value={repeatedNewPassword}
              name="repeatedNewPassword"
              onChange={onInputChange}
              placeholder="new password"
              marginTop="1em"
              type="password"
            />
          </StyledLabel>
          <StyledLabel>
            Stare hasło:
            <Input
              value={oldPassword}
              name="oldPassword"
              onChange={onInputChange}
              placeholder="old password"
              marginTop="1em"
              type="password"
            />
          </StyledLabel>
          <ValidationWarningMessage>{message}</ValidationWarningMessage>
          <Button onClick={changeUserPassword}>Zmień</Button>
        </ModalWrapper>
      )}
    </Modal>
  );
};

SettingsModals.propTypes = {};

export default SettingsModals;
