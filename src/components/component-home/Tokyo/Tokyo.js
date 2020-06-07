import React from 'react';
import './tokyo.scss';
import imgTokyo from '../../../images2/knt_logo@2x.png';
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
          <img src="~/assets/images/icon_btn@2x.png" alt="" />TOKYO JUNCTION by
        KINTOとは？
        </p>
      </div>
    </div >
  );
}
