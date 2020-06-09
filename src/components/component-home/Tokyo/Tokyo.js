import React, { useState } from 'react';
import './tokyo.scss';
import imgTokyo from '../../../svgs/tk_knt_logo.svg';
import btnIcon from '../../../svgs/icon_btn.svg';
import imgX from '../../../images/x.png';

export default function Tokyo() {
  let [activ, setActive] = useState(false);
  const showHideModal = () => {
    setActive(!activ);
  };
  return (
    <div className="site_wrap--padding mobiebo">
      <div className={activ ? 'modal' : 'hide-modal'}>
        <div className="modal__wrap ">
          <img className="icon-out" src={imgX} onClick={showHideModal} />
          <img src={imgTokyo} alt="" style={{ width: 170, height: 70 }} />
          <div className="modal__content">
            <h3>TOKYO JUNCTION by KINTOとは？</h3>
            <p>
              モビリティ・カンパニーへの変革に取り組むトヨタグループのモビリティサービスブランドKINTO。
              <br /> KINTOは様々なモビリティ事業者ともに、幅広いモビリティサービスを展開する体制をめざしています。
              <br />
              事業者の方々と知り合う場が、東京・日本橋にある「TOKYO JUNCTION」です。
            </p>
          </div>
        </div>
      </div>
      <div className="mobiebo__box" data-sal="slide-up" data-sal-delay="100" ata-sal-easing="ease">
        <span>モビエボとモビエボNEXTは</span>
        <img src={imgTokyo} alt="" />
        <span>からお届けします。</span>
      </div>
      <div className="mobiebo__button" onClick={showHideModal} v>
        <p>
          <img src={btnIcon} alt="" />
          TOKYO JUNCTION by KINTOとは？
        </p>
      </div>
    </div>
  );
}
