import React, { Component } from 'react';
import icon__buttonmenu from '../../../svgs/icon__buttonmenu.svg';
import banner_text from '../../../svgs/banner_text.svg';
import text_banner from '../../../svgs/text.svg';
import { Link } from 'gatsby';

import './banner.scss';
var WOW;
class Banner extends Component {
  componentDidMount() {
    const WOW = require('wow.js');
    new WOW().init();
  }
  render() {
    return (
      <div className="banner">
          <div className="tg-1 wow fadeIn" data-wow-delay="2s"></div>
          <div className="tg-2 wow fadeIn" data-wow-delay="2s"></div>
          <div className="tg-3 wow fadeIn" data-wow-delay="3s"></div>
          <div className="tg-4 wow fadeIn " data-wow-delay="3.5s"></div>
          <div className="tg-5"></div>
          <div className="tg-6"></div>
          <div className="banner__text-right">
            <img src={text_banner} />
          </div>
          <div className="button__mb-banner ">
            <Link to="/event-form" >
              <button className="header__button-mobile c-white header__button--gradient">
                <img src={icon__buttonmenu} />
            ENTRY
          </button>
            </Link>
          </div>
          <div className="banner__text wow fadeIn" data-wow-delay="2.5s">
            <div className="banner__text-img">
              <img src={banner_text} />
            </div>
            <div className="banner__bg">オンラインイベント開催決定</div>
            <div className="banner__box d-flex hide-mb">
              <a href="#" className="banner__box-button fontnoto-700 c-white">
                第1回
            </a>
              <span className="banner__box-date c-white fontlato-700">2020.07.07 THU</span>
            </div>
            <div className="banner__boxs hide-desktop">
              <p className="banner__boxs-buttons fontnoto-700 c-white">
                <span className="text-content">第1回 </span>
              </p>
              <p className="banner__boxs-dates c-white fontlato-700">2020.07.07 THU</p>
            </div>
          </div>
        <ul className="banner__brebCrumb d-flex container wow fadeIn banner__brebCrumb__mobile--hidden" data-wow-delay="5s">
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
