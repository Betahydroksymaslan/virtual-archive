import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentBox,
  ContentBoxName,
  ContentBoxProperty,
  ChangePasswordEmailButton,
  CategoryBox,
  ProprtyIconNameBox,
} from './SettingsMainContentBox.style';
import { ReactComponent as PasswordIcon } from 'assets/icons/passwordIcon.svg';
import { ReactComponent as RoleIcon } from 'assets/icons/roleIcon.svg';
import { ReactComponent as EmailIcon } from 'assets/icons/emailIcon.svg';

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
        <ProprtyIconNameBox>
          <EmailIcon />
          <ContentBoxName>Email</ContentBoxName>
        </ProprtyIconNameBox>
        <ContentBoxProperty>{currentUser.email}</ContentBoxProperty>
        <ChangePasswordEmailButton onClick={openEmailChange}>
          Zmień email
        </ChangePasswordEmailButton>
      </CategoryBox>

      <CategoryBox>
        <ProprtyIconNameBox>
          <PasswordIcon />
          <ContentBoxName>Hasło</ContentBoxName>
        </ProprtyIconNameBox>
        <ChangePasswordEmailButton onClick={openPasswordChange}>
          Zmień hasło
        </ChangePasswordEmailButton>
      </CategoryBox>

      <CategoryBox>
        <ProprtyIconNameBox>
          <RoleIcon />
          <ContentBoxName>Rola</ContentBoxName>
        </ProprtyIconNameBox>
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
