import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import MenuTrigger from 'components/atoms/MenuTrigger/MenuTrigger';
import {
  MenuWrapper,
  MenuWrapperBack,
  CloseMenuButton,
  LoginLink,
  LoginLinkArrow,
} from './Menu.styles';
import {
  menuOnAnimation,
  menuOffAnimation,
} from 'assets/animations/animations';
import { ReactComponent as CloseIcon } from 'assets/icons/closeIcon.svg';
import { ReactComponent as LoginIcon } from 'assets/icons/loginIcon.svg';
import MenuLinksList from 'components/molecules/MenuLinksList/MenuLinkList';
import LoginAndRegister from 'components/organisms/LoginAndRegister/LoginAndRegister';
import AppIcon from 'components/atoms/AppIcon/AppIcon';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'actions/auth.action';
import {
  openLoginAndRegisterModal,
  closeLoginAndRegisterModal,
} from 'actions/modals.action';

const Menu = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  let menuWrapperBack = useRef(null);
  let menuWrapper = useRef(null);
  let menuCloseButton = useRef(null);

  const changeMenuButtonPosition = () =>
    setIsMenuOpen((prevState) => !prevState);

  const menuOn = () => {
    changeMenuButtonPosition();
    menuOnAnimation(menuWrapperBack, menuWrapper, menuCloseButton);
  };

  const menuOff = () => {
    changeMenuButtonPosition();
    menuOffAnimation(menuCloseButton, menuWrapper, menuWrapperBack);
  };

  const goLogin = () => {
    menuOff();
    dispatch(openLoginAndRegisterModal());
  };

  const closeModal = () => dispatch(closeLoginAndRegisterModal());

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <MenuTrigger isMenuOpen={isMenuOpen} onClick={menuOn} />
      <MenuWrapperBack ref={(el) => (menuWrapperBack = el)}>
        <MenuWrapper ref={(el) => (menuWrapper = el)}>
          <AppIcon />

          <MenuLinksList menuOff={menuOff} />

          <LoginLink onClick={currentUser ? logOut : goLogin}>
            <LoginIcon />
            {currentUser ? 'Wyloguj się' : 'Zaloguj się'}
            <LoginLinkArrow />
          </LoginLink>
        </MenuWrapper>

        <CloseMenuButton ref={(el) => (menuCloseButton = el)} onClick={menuOff}>
          <CloseIcon />
        </CloseMenuButton>

        <LoginAndRegister closeModal={closeModal} />
      </MenuWrapperBack>
    </>
  );
};

Menu.propTypes = {};

export default Menu;
