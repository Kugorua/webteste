import logo from '../../../svgs/logo.svg';
import icon__buttonmenu from '../../../svgs/icon__buttonmenu.svg';
import arrow from '../../../svgs/arrow.svg';
import close from '../../../svgs/close.svg';
import bars from '../../../svgs/bars.svg';
import React, { useState } from 'react';
import './header.scss';
import { Link } from 'gatsby';
export default function Header() {
  const [activeMenu, setActive] = useState(false);
  const changeIcon = () => {
    setActive(!activeMenu);
  };
  return (
    <div className="header">
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
              <a href="#" className="header__menu-list__link c-white">
                CONCEPT
              </a>
              <div className="arrow">
                <img src={arrow} />
              </div>
            </li>
            <li className="header__menu-list">
              <a href="#" className="header__menu-list__link c-white">
                EVENT OUTLINE
              </a>
              <div className="arrow">
                <img src={arrow} />
              </div>
            </li>
            <li className="header__menu-list">
              <a href="#" className="header__menu-list__link c-white">
                SPEAKERS
              </a>
              <div className="arrow">
                <img src={arrow} />
              </div>
            </li>
            <li className="header__menu-list">
              <a href="#" className="header__menu-list__link c-white">
                MOVIE
              </a>
              <div className="arrow">
                <img src={arrow} />
              </div>
            </li>
            <div className="button__mb ">
              <button className="header__button-mobile c-white header__button--gradient">
                <img src={icon__buttonmenu} />
                ENTRY
              </button>
            </div>
          </ul>
          <div className="header__list d-flex">
            <ul className="header__menu d-flex">
              <li className="header__menu-list">
                <a href="#" className="header__menu-list__link c-white">
                  CONCEPT
                </a>
              </li>
              <li className="header__menu-list">
                <a href="#" className="header__menu-list__link c-white">
                  EVENT OUTLINE
                </a>
              </li>
              <li className="header__menu-list">
                <a href="#" className="header__menu-list__link c-white">
                  SPEAKERS
                </a>
              </li>
              <li className="header__menu-list">
                <a href="#" className="header__menu-list__link c-white">
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
