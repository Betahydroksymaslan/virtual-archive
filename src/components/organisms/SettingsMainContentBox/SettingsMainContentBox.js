import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentBox,
  ContentBoxName,
  ContentBoxProperty,
  ChangePasswordEmailButton,
  CategoryBox,
} from './SettingsMainContentBox.style';

const convertUserRole = (role) => {
  if (!role) return;
  if (role === 'ROLE_USER') {
    return 'Użytkownik';
  } else if (role === 'ROLE_MODERATOR') {
    return 'Moderator';
  } else if (role === 'ROLE_ADMIN') {
    return 'Administrator';
  }
};

const SettingsMainContentBox = ({ openModal, setModalType, currentUser }) => {
  const openEmailChange = () => {
    setModalType('CHANGE_EMAIL');
    openModal();
  };

  const openPasswordChange = () => {
    setModalType('CHANGE_PASSWORD');
    openModal();
  };

  return (
    <ContentBox>
      <CategoryBox>
        <ContentBoxName>Email</ContentBoxName>
        <ContentBoxProperty>{currentUser.email}</ContentBoxProperty>
        <ChangePasswordEmailButton onClick={openEmailChange}>
          Zmień email
        </ChangePasswordEmailButton>
      </CategoryBox>

      <CategoryBox>
        <ContentBoxName>Hasło</ContentBoxName>
        <ChangePasswordEmailButton onClick={openPasswordChange}>
          Zmień hasło
        </ChangePasswordEmailButton>
      </CategoryBox>

      <CategoryBox>
        <ContentBoxName>Rola</ContentBoxName>
        <ContentBoxProperty>
          {convertUserRole(currentUser.role)}
        </ContentBoxProperty>
      </CategoryBox>
    </ContentBox>
  );
};

SettingsMainContentBox.propTypes = {
  openModal: PropTypes.func,
  setModalType: PropTypes.func,
};

export default SettingsMainContentBox;
