import PropTypes from 'prop-types';
import imgBgCity from '../images/bg_city.png';
import React from 'react';

const Header = () => (
  <header>
    <img src={imgBgCity} />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
