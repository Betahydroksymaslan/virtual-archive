import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as AvatarIcon } from 'assets/icons/avatarIcon.svg';
import {
  UserInfoWrapper,
  UserInfoImage,
  UserInfoName,
  UserInfoEmail,
} from './UserInfo.styles';

const UserInfo = ({ email = '', username = 'Niezalogowany' }) => {
  return (
    <UserInfoWrapper>
      <UserInfoImage>
        <AvatarIcon />
      </UserInfoImage>
      {username ? (
        <>
          <UserInfoName>{username}</UserInfoName>
          <UserInfoEmail>{email}</UserInfoEmail>
        </>
      ) : (
        <UserInfoName>{email}</UserInfoName>
      )}
    </UserInfoWrapper>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
