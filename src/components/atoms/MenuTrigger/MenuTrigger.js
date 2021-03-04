import React from 'react';
import PropTypes from 'prop-types';
import { Button, Span } from './MenuTrigger.styles';

const MenuTrigger = (props) => {
  return (
    <Button {...props}>
      <Span />
    </Button>
  );
};

MenuTrigger.propTypes = {};

export default MenuTrigger;
