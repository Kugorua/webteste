import React, { useState, useEffect } from 'react';
import logo from '../../../svgs/logo.svg';
import icon__buttonmenu from '../../../svgs/icon__buttonmenu.svg';
import arrow from '../../../svgs/arrow.svg';
import close from '../../../svgs/close.svg';
import bars from '../../../svgs/bars.svg';
import './header.scss';
import { Link } from 'gatsby';
export default function Header() {
  const [activeMenu, setActive] = useState(false);
  const changeIcon = () => {
    setActive(!activeMenu);
  };
  useEffect(() => {
    const WOW = require('wow.js');
    new WOW().init();
  }, []);
  return (
    <div className="header wow fadeInDown" data-wow-delay="6.5s">
      <div className="container-fluid h-100">
        <div className="header__menu d-flex h-100">
          <div className="header__logo">
            <img src={logo} />
          </div>
          <div className="bar">
            <img src={activeMenu ? close : bars} onClick={changeIcon} className="hide-desktop showMb" />
          </div>
          <div className="close hide-mb">
            <img src={close} className="hide-desktop" />
          </div>
          <ul className={!activeMenu ? 'header__mobile hide-desktop showMb' : ' header__mobile hide-desktop showMb active'}>
            <li className="header__menu-list">
              <a className="header__menu-list__link c-white" href="#scroll-concept">
                CONCEPT
              </a>
              <div className="arrow">
                <img src={arrow} />
              </div>
            </li>
            <li className="header__menu-list">
              <a href="#" className="header__menu-list__link c-white" href="#scroll-event">
                EVENT OUTLINE
              </a>
              <div className="arrow">
                <img src={arrow} />
              </div>
            </li>
            <li className="header__menu-list">
              <a href="#" className="header__menu-list__link c-white" href="#scroll-speaker">
                SPEAKERS
              </a>
              <div className="arrow">
                <img src={arrow} />
              </div>
            </li>
            <li className="header__menu-list">
              <a href="#" className="header__menu-list__link c-white" href="#scroll-movie">
                MOVIE
              </a>
              <div className="arrow">
                <img src={arrow} />
              </div>
            </li>
            <div className="button__mb ">
              <Link to="/event-form" >
                <button className="header__button-mobile c-white header__button--gradient">
                  <img src={icon__buttonmenu} />
                ENTRY
              </button>
              </Link>
            </div>
          </ul>
          <div className="header__list d-flex">
            <ul className="header__menu d-flex">
              <li className="header__menu-list">
                <a className="header__menu-list__link c-white" href="#scroll-concept">
                  CONCEPT
                </a>
              </li>
              <li className="header__menu-list">
                <a href="#" className="header__menu-list__link c-white" href="#scroll-event">
                  EVENT OUTLINE
                </a>
              </li>
              <li className="header__menu-list">
                <a href="#" className="header__menu-list__link c-white" href="#scroll-speaker">
                  SPEAKERS
                </a>
              </li>
              <li className="header__menu-list">
                <a href="#" className="header__menu-list__link c-white" href="#scroll-movie">
                  MOVIE
                </a>
              </li>
            </ul>
            <div className="header__button">
              <Link to="/event-form" className="header__button-btn c-white header__button--gradient">
                <img src={icon__buttonmenu} />
                ENTRY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
