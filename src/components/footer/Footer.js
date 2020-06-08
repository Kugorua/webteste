import React from 'react';
import './footer.scss';
import imgG893 from '../../images/Group 893.png';
import imgG979 from '../../images/mobievo.png';
import imgNPlogo from '../../images/np_logo.png';
import imgIconFb from '../../images/Component 1.png';
import imgIconTw from '../../images/Component.png';
export default function Footer() {
  return (
    <div className="footer grid-full">
      <div className="footer__wrap grid">
        <div className="footer-top">
          <img src={imgG893} />
          <a href={'#'}>https://corp.kinto-jp.com/</a>
          <img src={imgG979} />
          <a href={'#'}>https://corp.kinto-jp.com/</a>
        </div>
        <div className="footer-share">
          <p>SHARE THIS PAGE</p>
          <a href={'#'}>
            <img src={imgIconTw} />
          </a>
          <a href={'#'}>
            <img src={imgIconFb} />
          </a>
        </div>
        <div className="footer-bottom">
          <img src={imgNPlogo} />
          <p>Powered by NewsPicks</p>
        </div>
      </div>
    </div>
  );
}
