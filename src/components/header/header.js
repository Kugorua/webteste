import PropTypes from 'prop-types';
import imgLogo from '../../images/logo.png';
import imgGp972 from '../../images/Group 972.png';
import imgCath from '../../images/catch.png';
import imgGp88 from '../../images/Group 888.png';
import React from 'react';
import './header.scss';
const Header = () => (
  <header className="header grid-full">
    <div className="nav-top ">
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
        <a className="entry">
          {' '}
          <img src={imgGp88} />
          Entry
        </a>
      </div>
    </div>

    <div className="header-content">
      <img src={imgGp972} />
      <a href={'#'}>オンラインイベント開催決定</a>
      <div className="header-date">
        <span>第1回</span>
        <span>2020.07.07 THU</span>
      </div>
    </div>
    <div className="header-position-img">
      <img src={imgCath} />
    </div>
    <div className="header-watch-new grid">
      <p>WHAT’S NEW</p>
      <div className="borders"></div>
      <p>2020.07.07</p>
      <a href={'#'}>セッションを更新しました</a>
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
