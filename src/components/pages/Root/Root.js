import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { StyledRoot } from './Root.styles';
import LoginAndRegister from 'components/organisms/LoginAndRegister/LoginAndRegister';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledRoot>
        <LoginAndRegister />
      </StyledRoot>
    </ThemeProvider>
  );
};

export default Root;
