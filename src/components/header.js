import PropTypes from 'prop-types';
import imgBgCity from '../images/bg_city.png';
import React from 'react';

const Header = () => <header className="header"></header>;

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
