import PropTypes from 'prop-types';
import icon__buttonmenu from '../../../svgs/icon__buttonmenu.svg';
import banner_text from '../../../svgs/banner_text.svg'
import React from 'react';
import './banner.scss';
const Banner = () => (
  <div className="banner">
    <div className="button__mb-banner ">
      <button className="header__button-mobile c-white header__button--gradient">
        <img src={icon__buttonmenu} />ENTRY
      </button>
    </div>
    <div className="banner__text">
      <img src={banner_text} />
      <div className="banner__bg"></div>
      <div className="banner__box d-flex hide-mb">
        <a href="#" className="banner__box-button fontnoto-700 c-white">第1回</a>
        <span className="banner__box-date c-white fontlato-700"
        >2020.07.07 THU</span
        >
      </div>
      <div className="banner__boxs hide-desktop">
        <p className="banner__boxs-buttons fontnoto-700 c-white">
          <span className="text-content">第1回 </span>
        </p>
        <p className="banner__boxs-dates c-white fontlato-700">
          2020.07.07 THU
        </p>
      </div>
    </div>
    <ul className="banner__brebCrumb d-flex container">
      <li className="banner__brebCrumb-item">
        <a href="#" className="c-white fontlato-700">WHAT’S NEW</a>
      </li>
      <li className="banner__brebCrumb-item">
        <a href="#" className="c-white fontlato-700">2020.07.07</a>
      </li>
      <li className="banner__brebCrumb-item">
        <a href="#" className="c-white fontnoto-700 banner__brebCrumb-item--active"
        >セッションを更新しました</a
        >
      </li>
    </ul>
  </div>
);

Banner.propTypes = {
  siteTitle: PropTypes.string
};

Banner.defaultProps = {
  siteTitle: ''
};

export default Banner;
