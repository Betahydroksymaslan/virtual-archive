import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  firstDocAnimation,
  secondDocAnimation,
  thirdDocAnimation,
  fourthDocAnimation,
} from 'assets/animations/animations';
import {
  StyledLoginWrapper,
  Header,
  Form,
  NavWrapper,
  NavItem,
  UsernameInput,
  PasswordInput,
  EmailInput,
  StyledButton,
  StyledSpan,
  LoginBox,
  LoginImageWrapper,
  ImageWrapper,
  ActionButton,
  Exit,
  ActionButtonArrow,
} from './LoginAndRegister.styles';
import { ReactComponent as LoginImage } from 'assets/images/loginImage.svg';

gsap.registerPlugin(MotionPathPlugin);

const LoginAndRegister = () => {
  const imageRef = useRef(null);

  const [isSignIn, setIsSignIn] = useState(true);

  const goSignIn = () => setIsSignIn(true);
  const goSignUp = () => setIsSignIn(false);

  const signInHandler = (e) => {
    e.preventDefault();
  };

  const signUpHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const [elements] = imageRef.current.children;

    const firstDocument = elements.querySelector('#documentOne');
    const secondDocument = elements.querySelector('#documentTwo');
    const thirdDocument = elements.querySelector('#documentThree');
    const fourthDocument = elements.querySelector('#documentFour');

    gsap.to(firstDocument, firstDocAnimation);
    gsap.to(secondDocument, secondDocAnimation);
    gsap.to(thirdDocument, thirdDocAnimation);
    gsap.to(fourthDocument, fourthDocAnimation);
  }, []);

  return (
    <LoginBox>
      <Exit>
        <FontAwesomeIcon icon={faTimes} />
      </Exit>
      <LoginImageWrapper>
        {isSignIn ? (
          <ActionButton onClick={goSignUp}>
            Zarejestruj się
            <ActionButtonArrow />
          </ActionButton>
        ) : (
          <ActionButton onClick={goSignIn}>
            Zaloguj się
            <ActionButtonArrow />
          </ActionButton>
        )}
        <ImageWrapper ref={imageRef}>
          <LoginImage />
        </ImageWrapper>
      </LoginImageWrapper>
      <StyledLoginWrapper>
        <Header>Hello!</Header>
        <NavWrapper>
          <NavItem active={isSignIn} onClick={goSignIn}>
            SIGN IN
          </NavItem>
          <NavItem active={!isSignIn} onClick={goSignUp}>
            SIGN UP
          </NavItem>
        </NavWrapper>
        {isSignIn ? (
          <Form>
            <UsernameInput placeholder="Username" text />
            <PasswordInput placeholder="Password" type="password" />
            <StyledButton onClick={signInHandler}>SIGN IN</StyledButton>
          </Form>
        ) : (
          <Form>
            <UsernameInput placeholder="Username" text />
            <PasswordInput placeholder="Password" type="password" />
            <EmailInput placeholder="Email" />
            <StyledButton onClick={signUpHandler}>SIGN UP</StyledButton>
          </Form>
        )}
        <StyledSpan>Forgot Password?</StyledSpan>
      </StyledLoginWrapper>
    </LoginBox>
  );
};

LoginAndRegister.propTypes = {};

export default LoginAndRegister;
