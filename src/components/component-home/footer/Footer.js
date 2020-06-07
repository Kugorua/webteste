import React from 'react';
import ft_knt_logo from '../../../images2/ft_knt_logo@2x.png';
import icon__buttonmenu from '../../../svgs/icon__buttonmenu.svg';
import mobievo from '../../../images2/mobievo@2x.png';
import tw_icon from '../../../svgs/tw_icon.svg';
import fb_icon from '../../../svgs/fb_icon.svg';
import np_logo from '../../../images2/np_logo.png';
import './footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__item">
        <div>
          <img src={ft_knt_logo} alt="" />
          <p>
            <img src={icon__buttonmenu} alt="" />
            <a href="https://corp.kinto-jp.com/">https://corp.kinto-jp.com/</a>
          </p>
        </div>
        <div>
          <img src={mobievo} alt="" />
          <p>
            <img src={icon__buttonmenu} alt="" />
            <a href="https://newspicks.com/theme-news/3698/"
            >https://newspicks.com/theme-news/3698/</a
            >
          </p>
        </div>
      </div>
      <div className="footer__social">
        <p>
          SHARE THIS PAGE
          <img src={tw_icon} alt="" />
          <img src={fb_icon} alt="" />
        </p>
      </div>
      <div className="footer__team">
        <img src={np_logo} alt="" />
        <p>powered by NewsPicks</p>
      </div>
    </div>
  );
}
