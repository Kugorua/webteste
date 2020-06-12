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
    this.tg = setTimeout(() => {
      const tg1 = document.querySelector('.tg-1clone');
      tg1.classList.add('transform');
      const tg2 = document.querySelector('.tg-2clone');
      tg2.classList.add('transform2');
    }, 8000);
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      const dot = document.querySelector('.banner__dot');
      dot.classList.add('hide');
      const bannertop = document.querySelector('.banner__top');
      bannertop.classList.add('hidden');
      const bannerbottom = document.querySelector('.banner__bottom');
      bannerbottom.classList.add('hidden');
    }, 5000);
    this.Pentagon = setInterval(() => {
      const left = document.querySelector('.tg-1');
      left.classList.add('hidden');
      const right = document.querySelector('.tg-2');
      right.classList.add('hidden');
    }, 6000);
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
    if (this.Pentagon) {
      clearInterval(this.Pentagon);
    }

  }
  render() {
    return (
      <div className="banner">
        <div className="banner__top"></div>
        <div className="banner__bottom"></div>
        <div className="tg-1"></div>
        <div className="tg-2"></div>
        <div className="tg-1clone wow fadeIn" data-wow-delay="6s"></div>
        <div className="tg-2clone wow fadeIn" data-wow-delay="6s"></div>
        <div className="banner__dot "></div>
      </div>
    );
  }
}

export default Banner;
