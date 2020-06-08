import React from 'react';
import './tokyo.scss';
import imgTokyo from '../../../svgs/tk_knt_logo.svg';
import btnIcon from '../../../svgs/icon_btn.svg';

export default function Tokyo() {
  return (
    <div className="site_wrap--padding mobiebo">
      <div className="mobiebo__box">
        <span>モビエボとモビエボNEXTは</span>
        <img src={imgTokyo} alt="" />
        <span>からお届けします。</span>
      </div>
      <div className="mobiebo__button">
        <p >
          <img src={btnIcon} alt="" />TOKYO JUNCTION by
        KINTOとは？
        </p>
      </div>
    </div >
  );
}
