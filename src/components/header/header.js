import React, { Component } from 'react';
import imgLogo from '../../images/logo.png';
import imgGp972 from '../../images/Group 972.png';
import imgCath from '../../images/catch.png';
import imgGp88 from '../../images/Group 888.png';
import './header.scss';
var WOW;
class header extends Component {
  componentDidMount() {
    const WOW = require('wow.js');
    new WOW().init();
  }
  render() {
    return (
      <header className="header grid-full ">
        <div className="tg-1 wow fadeIn" data-wow-delay="2s"></div>
        <div className="tg-2 wow fadeIn" data-wow-delay="2s"></div>
        <div className="tg-3 wow fadeIn" data-wow-delay="3.5s"></div>
        <div className="tg-4 wow fadeIn " data-wow-delay="5s"></div>
        <div className="tg-5"></div>
        <div className="tg-6"></div>

        <div className="nav-top wow fadeIn" data-wow-delay="8s">
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

        <div className="header-content wow fadeIn" data-wow-delay="3s">
          <img src={imgGp972} />
          <a href={'#'}>オンラインイベント開催決定</a>
          <div className="header-date">
            <span>第1回</span>
            <span>2020.07.27 MON</span>
          </div>
        </div>
        <div className="header-position-img">
          <img src={imgCath} />
        </div>
        <div className="header-watch-new grid wow fadeIn" data-wow-delay="7s">
          <p>WHAT’S NEW</p>
          <div className="borders"></div>
          <p>2020.07.07</p>
          <a href={'#'}>セッションを更新しました</a>
        </div>
      </header>
    );
  }
}

export default header;
