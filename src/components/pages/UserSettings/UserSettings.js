import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as PersonIcon } from 'assets/icons/personIcon.svg';
import {
  UserSettingsWrapper,
  SettingsHeader,
  HeaderUsername,
  HeaderUserImage,
  NoUserMessage,
  HeaderUserWrapper,
  PageName,
} from './UserSettings.styles';
import SettingsMainContentBox from 'components/organisms/SettingsMainContentBox/SettingsMainContentBox';
import SettingsModals from 'components/organisms/SettingsModals/SettingsModals';
import { useSelector, useDispatch } from 'react-redux';
import {
  openChangeEmailAndPasswordModal,
  closeChangeEmailAndPasswordModal,
} from 'actions/modals.action';

const UserSettings = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { isChangeLoginAndRegisterModalOpen } = useSelector(
    (state) => state.modals
  );
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState('');

  const openModal = () => dispatch(openChangeEmailAndPasswordModal());
  const closeModal = () => dispatch(closeChangeEmailAndPasswordModal());

  return (
    <>
      <UserSettingsWrapper>
        {currentUser ? (
          <>
            <SettingsHeader>
              <PageName>Ustawienia</PageName>
              <HeaderUserWrapper>
                <HeaderUserImage>
                  <PersonIcon />
                </HeaderUserImage>
                <HeaderUsername>{currentUser.username}</HeaderUsername>
              </HeaderUserWrapper>
            </SettingsHeader>
            <SettingsMainContentBox
              setModalType={setModalType}
              openModal={openModal}
              currentUser={currentUser}
            />
          </>
        ) : (
          <NoUserMessage>Nie jesteś zalogowany</NoUserMessage>
        )}
        <SettingsModals
          modalType={modalType}
          isOpen={isChangeLoginAndRegisterModalOpen}
          handleOnClose={closeModal}
        />
      </UserSettingsWrapper>
    </>
  );
};

UserSettings.propTypes = {};

export default UserSettings;
