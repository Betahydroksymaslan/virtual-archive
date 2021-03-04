import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { LoginDocumentsAnimation } from 'assets/animations/animations';
import {
  StyledLoginWrapper,
  Header,
  NavWrapper,
  NavItem,
  StyledSpan,
  LoginBox,
  LoginImageWrapper,
  ImageWrapper,
} from './LoginAndRegister.styles';
import { ReactComponent as LoginImage } from 'assets/images/loginImage.svg';
import LoginForm from 'components/molecules/LoginForm/LoginForm';
import RegisterForm from 'components/molecules/RegisterForm/RegisterForm';
import ExitButton from 'components/atoms/ExitButton/ExitButton';
import ArrowButton from 'components/atoms/ArrowButton/ArrowButton';
import Modal from 'components/atoms/Modal/Modal';
import { useSelector } from 'react-redux';

const LoginAndRegister = ({ closeModal }) => {
  const { isLoginAndRegisterModalOpen } = useSelector((state) => state.modals);
  const [isSignIn, setIsSignIn] = useState(true);

  const imageRef = useRef(null);

  const chengeSigningMethod = () => {
    setIsSignIn((prevState) => !prevState);
  };

  // >>>>>>>>>>>>>> LOGIN AND REGISTRATION LOGIC <<<<<<<<<<<<<<<

  useEffect(() => {
    const [elements] = imageRef.current.children;

    const firstDocument = elements.querySelector('#documentOne');
    const secondDocument = elements.querySelector('#documentTwo');
    const thirdDocument = elements.querySelector('#documentThree');
    const fourthDocument = elements.querySelector('#documentFour');
    LoginDocumentsAnimation(
      firstDocument,
      secondDocument,
      thirdDocument,
      fourthDocument
    );
  }, []);

  return (
    <Modal
      shouldBeClosedOnOutsideClick={true}
      isOpen={isLoginAndRegisterModalOpen}
      handleOnClose={closeModal}
    >
      <LoginBox>
        <ExitButton onClick={closeModal} />

        {/* >>>>>>>>>>>>>>>>>>>>> IMAGE SVG AREA <<<<<<<<<<<<<<<<<<< */}

        <LoginImageWrapper>
          <ArrowButton handler={chengeSigningMethod}>
            {isSignIn ? 'Zarejestruj się' : 'Zaloguj się'}
          </ArrowButton>

          <ImageWrapper ref={imageRef}>
            <LoginImage />
          </ImageWrapper>
        </LoginImageWrapper>

        {/* >>>>>>>>>>>>>>>>>>>>> FORMS AREA <<<<<<<<<<<<<<<<<<<<< */}

        <StyledLoginWrapper>
          <Header>Witaj!</Header>
          <NavWrapper>
            <NavItem active={isSignIn} onClick={chengeSigningMethod}>
              SIGN IN
            </NavItem>
            <NavItem active={!isSignIn} onClick={chengeSigningMethod}>
              SIGN UP
            </NavItem>
          </NavWrapper>
          {isSignIn ? <LoginForm /> : <RegisterForm />}
          <StyledSpan>Zapomniałeś hasła?</StyledSpan>
        </StyledLoginWrapper>
      </LoginBox>
    </Modal>
  );
};

LoginAndRegister.propTypes = {};

export default LoginAndRegister;
