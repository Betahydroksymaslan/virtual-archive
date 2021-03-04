import React from 'react';
import PropTypes from 'prop-types';
import { ActionButton, ActionButtonArrow } from './ArrowButton.styles';

const ArrowButton = ({ handler, children }) => {
  return (
    <ActionButton onClick={handler}>
      {children}
      <ActionButtonArrow />
    </ActionButton>
  );
};

ArrowButton.propTypes = {};

export default ArrowButton;
