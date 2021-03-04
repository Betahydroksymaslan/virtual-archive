import React from 'react';
import PropTypes from 'prop-types';
import { HomeWrapper } from './Home.styles';
import Loader from 'components/atoms/Loader/Loader';

const Home = (props) => {
  return (
    <HomeWrapper>
      <Loader />
    </HomeWrapper>
  );
};

Home.propTypes = {};

export default Home;
