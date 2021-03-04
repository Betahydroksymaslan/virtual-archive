import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as AppLogo } from 'assets/icons/virtualArchiveLogo.svg';
import {
  AppLogoWrapper,
  LogoImageWrapper,
  AppLogoName,
} from './AppIcon.styles';

const AppIcon = (props) => {
  return (
    <AppLogoWrapper>
      <LogoImageWrapper>
        <AppLogo />
      </LogoImageWrapper>
      <AppLogoName>Virtual Archive</AppLogoName>
    </AppLogoWrapper>
  );
};

AppLogo.propTypes = {};

export default AppIcon;
