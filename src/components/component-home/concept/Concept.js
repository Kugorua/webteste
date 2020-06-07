import React from 'react';
import mobievo from '../../../svgs/rgt.svg';
import './concept.scss';
export default function Concept() {
  return (
    <div className="site_wrap--padding concept">
      <div className="concept__title">
        <h3 className="concept__title-sub fontlato-700">
          CONCEPT
        </h3>
        <p className="concept__description fontnoto-700">
          今こそ、移動を考えよう。
        </p>
        <p className="concept__description fontnoto-700">
          移動＝モビリティ」を問い直すことで、これからのビジネス、
          そして世界の動きが見。
        </p>
        <p className="concept__description fontnoto-700">
          その「移動」がいま、変革期を迎えている。
        </p>
        <p className="concept__description fontnoto-700">
          運転の担い手は人からAIに。クルマは所有するモノから、
          シェアするサービスへ。テクノロジーが、移動の概念を覆しつつある。
        </p>
        <p className="concept__description fontnoto-700">
          馬から鉄道、クルマ、飛行機と、人間は移動によって文明を進化させてきた。
          現代も、物流は不可欠なインフラであり、旅行や観光は巨大産業に成長した。
        </p>
        <p className="concept__description fontnoto-700">移動は人間の本能。</p>
      </div>
      <div className="concept__item ">
        <div className="concept__item-box d-flex">
          <div className="concept__box-logo">
            <img src={mobievo} />
          </div>
          <p className="concept__box-text c-white">モビエボとは</p>
        </div>
        <p className="des-bottom c-white">
          次世代の移動をテーマにした、オンライン番組をNewsPicksとYouTubeで配信中。毎月、モビリティサービスを手掛けるスタートアップに密着取材し、スタジオでは有識者を交えて、これからのモビリティビジネスについて議論している。
        </p>
      </div>
      <div className="concept__item">
        <div className="concept__item-box d-flex">
          <div className="concept__box-logo">
            <img src={mobievo} />
          </div>
          <p className="concept__box-text c-white">モビエボNEXTとは</p>
        </div>
        <p className="des-bottom c-white">
          モビエボの「次」を見出し、発掘していくための視聴者参加型のオンラインイベント。モビリティビジネスに関心があり、次のアクションを考えるビジネスパーソンを対象に、よりリアルにビジネス視点で議論し、次世代のモビリティビジネスを生み出す場を目指す。
        </p>
      </div>
    </div>
  );
}
