import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './StyledLabel.style';

const StyledLabel = ({ children }) => {
  return <Label>{children}</Label>;
};

StyledLabel.propTypes = {};

export default StyledLabel;
