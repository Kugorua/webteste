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
    setTimeout(() => {
      const textRight = document.querySelector(".banner__np");

      textRight.classList.add('hide');

    }, 10000);
  }

  componentWillMount() {
    setInterval(() => {
      const dot = document.querySelector(".banner__dot");
      dot.classList.add('hide');
    }, 6000);
  }

  render() {
    return (
      <div className="banner">
        <div className="banner__np">
            <img src={banner__np}/>
            <p id="text-vertical">powered by NewsPicks</p>
        </div>
        <div className="tg-1 wow fadeIn" data-wow-delay="5s"></div>
        <div className="tg-5 wow fadeIn " data-wow-delay="8s">
            <a href="#scroll-concept">Scroll</a>
        </div>
        <div className="tg-2 wow fadeIn" data-wow-delay="5s"></div>
        <div className="tg-3 wow fadeIn" data-wow-delay="6s"></div>
        <div className="tg-4 wow fadeIn " data-wow-delay="7s"></div>
        <div className="line-3"></div>
        <div className="line2"></div>
         <div className="banner__dot "></div>
        <div className="button__mb-banner ">
          <Link to="/event-form" >
            <button className="header__button-mobile c-white header__button--gradient">
              <img src={icon__buttonmenu} />
            ENTRY
          </button>
          </Link>
        </div>
        <div className="banner__text-right">
          <img src={text_banner} className="hidden-text-mb"/>
          <img src={banner_text_mb} className="hidden-text-pc" />
        </div>
        <div className="banner__text">
          <div className="banner__text-img wow fadeIn" data-wow-delay="4s">
            <img src={banner_text} />
          </div>
          <div className="banner__bg wow fadeIn" data-wow-delay="8s">オンラインイベント開催決定</div>
          <div className="banner__box d-flex hide-mb wow fadeIn"  data-wow-delay="8s">
            <a href="#" className="banner__box-button fontnoto-700 c-white">
              第1回
            </a>
            <span className="banner__box-date c-white fontlato-700 " >2020.07.07 THU</span>
          </div>
          <div className="banner__boxs hide-desktop">
            <p className="banner__boxs-buttons fontnoto-700 c-white">
              <span className="text-content">第1回 </span>
            </p>
            <p className="banner__boxs-dates c-white fontlato-700">2020.07.07 THU</p>
          </div>
        </div>
        <ul className="banner__brebCrumb d-flex container wow fadeIn banner__brebCrumb__mobile--hidden" data-wow-delay="8s">
          <li className="banner__brebCrumb-item">
            <a href="#" className="c-white fontlato-700">
              WHAT’S NEW
            </a>
          </li>
          <li className="banner__brebCrumb-item">
            <a href="#" className="c-white fontlato-700">
              2020.07.07
            </a>
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
