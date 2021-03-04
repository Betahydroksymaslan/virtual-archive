import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { StyledRoot } from './Root.styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from 'components/organisms/Menu/Menu';
import Home from 'components/pages/Home/Home';
import UserSettings from 'components/pages/UserSettings/UserSettings';
import { Provider } from 'react-redux';
import configureStore from 'data/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Root = () => {
  const store = configureStore();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <StyledRoot>
            <Menu />
            <ToastContainer />
            <Switch>
              <Route exact path={['/', '/home']} component={Home} />
              <Route path="/userSettings" component={UserSettings} />
            </Switch>
          </StyledRoot>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default Root;
