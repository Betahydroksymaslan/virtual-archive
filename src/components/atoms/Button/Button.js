import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

Button.propTypes = {};

export default Button;
