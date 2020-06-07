import React from 'react';
import './tokyo.scss';
import imgTokyo from '../../../images/knt_logo@2x.png';
export default function Tokyo() {
  return (
    <div className="tokyo grid-full">
      <div className="bg-tokyo-1 grid-full"></div>
      <div className="bg-tokyo-2 grid-full"></div>
      <div className="tokyo__wrap grid">
        <div className="tokyo__content">
          <p>モビエボとモビエボNEXTは</p>
          <img src={imgTokyo} />
          <p>からお届けします。</p>
        </div>
        <a href={'#'}>TOKYO JUNCTION by KINTOとは？</a>
      </div>
    </div>
  );
}
