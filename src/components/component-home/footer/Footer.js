import React from 'react';
import ft_knt_logo from '../../../svgs/knt_logo.svg';
import icon__buttonmenu from '../../../svgs/icon__buttonmenu.svg';
import mobievo from '../../../svgs/mobievo.svg';
import tw_icon from '../../../svgs/tw_icon.svg';
import fb_icon from '../../../svgs/fb_icon.svg';
import np_logo from '../../../svgs/np_logo.svg';
import { TwitterShareButton, FacebookShareButton } from 'react-share';
import './footer.scss';

export default function Footer() {
  return (
    <div className="site_wrap--padding footer">
      <div className="footer__item" data-sal="slide-up" data-sal-duration="5s" data-sal-delay="500" ata-sal-easing="ease">
        <div>
          <img src={ft_knt_logo} alt="" />
          <p>
            <img src={icon__buttonmenu} alt="" />
            <a href="https://corp.kinto-jp.com/" target="_blank" rel="noopener noreferrer">
              https://corp.kinto-jp.com/
            </a>
          </p>
        </div>
        <div>
          <img src={mobievo} alt="" />
          <p>
            <img src={icon__buttonmenu} alt="" />
            <a href="https://newspicks.com/theme-news/3698/" target="_blank" rel="noopener noreferrer">
              https://newspicks.com/theme-news/3698/
            </a>
          </p>
        </div>
      </div>
      <div className="footer__social" data-sal="slide-up" data-sal-duration="5s" data-sal-delay="500" ata-sal-easing="ease">
        <div className="footer__social--icons">
          <p>SHARE THIS PAGE</p>
          <TwitterShareButton title="モビエボNEXT オンラインイベント開催決定" via="" url="https://westship.newspicks.com/?fbclid=IwAR3UZABbzs313FcDNwV3XhPeykci8sSOIXHdOAncHs-LFm5DfpyXqEVlRO0">
            <img src={tw_icon} alt="" />
          </TwitterShareButton>
          <FacebookShareButton url="https://westship.newspicks.com/?fbclid=IwAR3UZABbzs313FcDNwV3XhPeykci8sSOIXHdOAncHs-LFm5DfpyXqEVlRO0">
            <img src={fb_icon} alt="" />
          </FacebookShareButton>
        </div>
      </div>
      <div className="footer__team" data-sal="slide-up" data-sal-duration="5s" data-sal-delay="500" ata-sal-easing="ease">
        <img src={np_logo} alt="" />
        <p>Powered by NewsPicks</p>
      </div>
    </div>
  );
}
