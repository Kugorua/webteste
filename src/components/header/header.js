import PropTypes from 'prop-types';
import imgLogo from '../../images/logo.png';
import React from 'react';
import './header.scss';
const Header = () => (
  <header className="header">
    <div className="nav-top grid-full">
      <div className="nav-top__wrap grid">
        <div className="nav-top__logo">
          <img src={imgLogo} />
        </div>
        <ul className="nav-top__list">
          <li className="nav-top__list__item">
            <a>Concept</a>
          </li>
          <li className="nav-top__list__item">
            <a>Event outline</a>
          </li>
          <li className="nav-top__list__item">
            <a>Speakers</a>
          </li>
          <li className="nav-top__list__item">
            <a>Movie</a>
          </li>
        </ul>
        <a className="entry">Entry</a>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
