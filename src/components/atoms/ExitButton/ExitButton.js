import React from 'react';
import PropTypes from 'prop-types';
import { Exit } from './ExitButton.styles';
import { ReactComponent as CloseIcon } from 'assets/icons/closeIcon.svg';

const ExitButton = (props) => {
  return (
    <Exit {...props}>
      <CloseIcon />
    </Exit>
  );
};

ExitButton.propTypes = {};

export default ExitButton;
