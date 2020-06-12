import React, { Component } from 'react';
import icon__buttonmenu from '../../../svgs/icon__buttonmenu.svg';
import banner_text from '../../../svgs/banner_text.svg';
import banner_text_mb from '../../../svgs/banner_text_mb.svg';
import noysi from '../../../svgs/noisy.svg';
import text_banner from '../../../svgs/text.svg';
import banner__np from '../../../svgs/np_logo.svg';
import { Link } from 'gatsby';

import './banner.scss';
var WOW;
class Banner extends Component {
  componentDidMount() {
    const WOW = require('wow.js');
    new WOW().init();
    this.tg = setTimeout(() => {
      const tg1 = document.querySelector('.tg-1clone');
      tg1.classList.add('transform');
      const tg2 = document.querySelector('.tg-2clone');
      tg2.classList.add('transform2');
      const triangleLeft = document.querySelector('.banner__triangle-left');
      triangleLeft.classList.add('transform');
      const triangleRight = document.querySelector('.banner__triangle-right');
      triangleRight.classList.add('transform');
    }, 6000);
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      const dot = document.querySelector('.banner__dot');
      dot.classList.add('hide');
      const bannertop = document.querySelector('.banner__top');
      bannertop.classList.add('hidden');
      const bannerbottom = document.querySelector('.banner__bottom');
      bannerbottom.classList.add('hidden');
    }, 2000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.Pentagon) {
      clearInterval(this.Pentagon);
    }
    if (this.tg) {
      clearInterval(this.tg);
    }

  }
  render() {
    return (
      <div className="banner">
        <div className="banner__np">
          <img src={banner__np} />
          <p id="text-vertical">powered by NewsPicks</p>
        </div>
        <div className="tg-5 wow fadeIn " data-wow-delay="7s">
          <a href="#scroll-concept">Scroll</a>
        </div>
        <div className="banner__top"></div>
        <div className="banner__bottom"></div>
        <div className="tg-1"></div>
        <div className="tg-2"></div>
        <div className="tg-1clone wow fadeInLeft" data-wow-delay="3s"></div>
        <div className="tg-2clone wow fadeInRight" data-wow-delay="3s"></div>
        <div className="tg-3 wow fadeInRight" data-wow-delay="4s"></div>
        <div className="tg-6 wow fadeInLeft" data-wow-delay="4s"></div>
        <div className="tg-4 wow fadeIn " data-wow-delay="5s">
          <img src={noysi}></img>
        </div>
        <div className="banner__dot "></div>
        <div className="banner__triangle-left wow fadeIn" id="banner__triangle-left" data-wow-delay="5s"></div>
        <div className="banner__triangle-right  wow fadeIn" id="banner__triangle-right" data-wow-delay="5s"></div>
        <div className="button__mb-banner wow fadeIn" data-wow-delay="7s">
          <Link to="/event-form">
            <button className="header__button-mobile c-white header__button--gradient">
              <img src={icon__buttonmenu} />
              ENTRY
            </button>
          </Link>
        </div>
        <div className="banner__text-right">
          <img src={text_banner} className="hidden-text-mb" />
          <img src={banner_text_mb} className="hidden-text-pc" />
        </div>
        <div className="banner__text">
          <div className="banner__text-img wow fadeIn" data-wow-delay="3.5s">
            <img src={banner_text} />
          </div>
          <div className="banner__bg wow fadeIn" data-wow-delay="7s">
            <p className="banner__bg--title">オンラインイベント開催決定</p>
          </div>
          <div className="banner__box d-flex hide-mb wow fadeIn" data-wow-delay="7s">
            <p href="#" className="banner__box-button fontnoto-700 c-white">
              第1回
            </p>
            <p className="banner__box-date c-white fontlato-700 ">2020.07.27 MON</p>
          </div>
          <div className="banner__boxs hide-desktop wow fadeIn" data-wow-delay="7s">
            <p className="banner__boxs-buttons fontnoto-700 c-white">
              <span className="text-content">第1回 </span>
            </p>
            <p className="banner__boxs-dates c-white fontlato-700">2020.07.27 MON</p>
          </div>
        </div>
        <ul className="banner__brebCrumb d-flex container wow fadeIn banner__brebCrumb__mobile--hidden" data-wow-delay="7s">
          <li className="banner__brebCrumb-item">
            <p href="#" className="c-white fontlato-700">
              WHAT’S NEW
            </p>
          </li>
          <li className="banner__brebCrumb-item">
            <p href="#" className="c-white fontlato-700">
              2020.07.07
            </p>
          </li>
          <li className="banner__brebCrumb-item">
            <a href="#" className="c-white fontnoto-700 banner__brebCrumb-item--active">
              <span>セッションを</span>
              <span>更新</span>
              <span>しました</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Banner;
