import React, { Component } from 'react';
import icon__buttonmenu from '../../../svgs/icon__buttonmenu.svg';
import banner_text from '../../../svgs/banner_text.svg';
import banner_text_mb from '../../../svgs/banner_text_mb.svg';

import text_banner from '../../../svgs/text.svg';
import banner__np from '../../../svgs/np_logo.svg';
import { Link } from 'gatsby';

import './banner.scss';
var WOW;
class Banner extends Component {
  componentDidMount() {
    const WOW = require('wow.js');
    new WOW().init();
    this.time = setTimeout(() => {
      const textRight = document.querySelector('.banner__np');
      textRight.classList.add('hide');
    }, 10000);
    this.tg = setTimeout(() => {
      const tg1 = document.querySelector('.tg-1');
      tg1.classList.add('transform');
      const triangleLeft = document.querySelector('.banner__triangle-left');
      triangleLeft.classList.add('transform');
      const triangleRight = document.querySelector('.banner__triangle-right');
      triangleRight.classList.add('transform');
      const tg2 = document.querySelector('.tg-2');
      tg2.classList.add('transform2');
      const tg3 = document.querySelector('.tg-3');
      tg3.classList.add('hide');
      const tg6 = document.querySelector('.tg-6');
      tg6.classList.add('hide');
    }, 8000);
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      const dot = document.querySelector('.banner__dot');
      dot.classList.add('hide');
    }, 7000);
    this.timeLine1 = setInterval(() => {
      const line = document.querySelector('.line-3');
      line.classList.add('hide');

    }, 6000);
    this.timeLine2 = setInterval(() => {
      const line = document.querySelector('.line2');
      line.classList.add('hide');
    }, 6000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.time) {
      clearTimeout(this.time);
    }
    if (this.tg) {
      clearTimeout(this.tg);
    }
    if (this.timeLine1) {
      clearTimeout(this.timeLine1);
    }
    if (this.timeLine2) {
      clearTimeout(this.timeLine2);
    }
  }
  render() {
    return (
      <div className="banner">
        <div className="banner__np">
          <img src={banner__np} />
          <p id="text-vertical">powered by NewsPicks</p>
        </div>
        <div className="tg-5 wow fadeIn " data-wow-delay="8s">
          <a href="#scroll-concept">Scroll</a>
        </div>
        <div className="tg-1 wow fadeIn" data-wow-delay="5s"></div>
        <div className="tg-2 wow fadeIn" data-wow-delay="5s"></div>
        <div className="tg-3 wow fadeInRight" data-wow-delay="6s"></div>
        <div className="tg-6 wow fadeInLeft" data-wow-delay="6s"></div>
        <div className="tg-4 wow fadeIn " data-wow-delay="7s"></div>
        <div className="line-3"></div>
        <div className="line2"></div>
        <div className="banner__dot "></div>
        <div className="banner__triangle-left wow fadeIn" id="banner__triangle-left" data-wow-delay="5s"></div>
        <div className="banner__triangle-right  wow fadeIn" id="banner__triangle-right" data-wow-delay="5s"></div>
        <div className="button__mb-banner ">
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
          <div className="banner__text-img wow fadeIn" data-wow-delay="4s">
            <img src={banner_text} />
          </div>
          <div className="banner__bg wow fadeIn" data-wow-delay="8s">
            <p className="banner__bg--title">オンラインイベント開催決定</p>
          </div>
          <div className="banner__box d-flex hide-mb wow fadeIn" data-wow-delay="8s">
            <p href="#" className="banner__box-button fontnoto-700 c-white">
              第1回
            </p>
            <p className="banner__box-date c-white fontlato-700 ">2020.07.27 MON</p>
          </div>
          <div className="banner__boxs hide-desktop">
            <p className="banner__boxs-buttons fontnoto-700 c-white">
              <span className="text-content">第1回 </span>
            </p>
            <p className="banner__boxs-dates c-white fontlato-700">2020.07.27 MON</p>
          </div>
        </div>
        <ul className="banner__brebCrumb d-flex container wow fadeIn banner__brebCrumb__mobile--hidden" data-wow-delay="8s">
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
              セッションを更新しました
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Banner;
