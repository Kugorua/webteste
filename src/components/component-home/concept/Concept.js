import React from 'react';
import ft_knt_logo from '../../../svgs/knt_logo.svg';
import mobievo_pc from '../../../svgs/mobievo_pc.svg';
import mobievo_mb from '../../../svgs/mobiebo_mb.svg';
import mobiebo_next_pc from '../../../svgs/mobiebo_next_pc.svg';
import mobiebo_next_mb from '../../../svgs/mobiebo_next_mb.svg';
import './concept.scss';
export default function Concept() {
  return (
    <div className="bg-concept" id="scroll-concept">
      <div className="bg-concept__1"></div>
      <div className="bg-concept__2"></div>
      <div className="bg-concept__3"></div>
      <div className="bg-concept__4"></div>
      <div className="site_wrap--padding concept">
        <div className="concept__title" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
          <h3 className="concept__title-sub fontlato-700">CONCEPT</h3>
          <p className="concept__description fontnoto-500">移動は人間の本能。</p>
          <p className="concept__description fontnoto-500">
            馬から鉄道、クルマ、飛行機と、人間は移動によって文明を進化させてきた。
            <br />
            現代も、物流は不可欠なインフラであり、旅行や観光は巨大産業に成長した。
          </p>
          <p className="concept__description fontnoto-500">その「移動」がいま、変革期を迎えている。</p>
          <p className="concept__description fontnoto-500">
            運転の担い手は人からAIに。クルマは所有するモノから、
            <br className="desktop" />
            シェアするサービスへ。テクノロジーが、移動の概念を覆しつつある。
          </p>
          <p className="concept__description fontnoto-500">
            一方、パンデミックに接し、人が移動し、行動を広げる
            <br />
            ことのリスクにも直面している。
          </p>
          <p className="concept__description fontnoto-500">
            「移動＝モビリティ」を見つめ直すことで、これからのビジネス、
            <br />
            そして世界の動きが見えてくる。
          </p>
          <p className="concept__description fontnoto-500">今こそ、移動を考えよう。</p>
        </div>
        <div className="concept__box ">
          <div className="item " data-sal="slide-up" data-sal-easing="ease-out-back" data-sal-duration="1500" data-sal-delay="200">
            <div className="item-box d-flex">
              <div className="concept__box-logo">
                <img className="mobile" src={mobievo_mb} />
                <img className="desktop" src={mobievo_pc} />
              </div>
              <p className="concept__box--separation"></p>
              <p className="concept__box--text fontnoto-600 c-white">モビエボとは</p>
            </div>
            <p className="des-bottom fontnoto-500 c-white">
              次世代の移動をテーマにした、オンライン番組をNewsPicksとYouTubeで配信中。毎月、モビリティサービスを手掛けるスタートアップに密着取材し、スタジオでは有識者を交えて、これからのモビリティビジネスについて議論している。
            </p>
          </div>
          <div className="item" data-sal="slide-up" data-sal-easing="ease-out-back" data-sal-duration="1500" data-sal-delay="200">
            <div className="item-box d-flex">
              <div className="concept__box-logo">
                <img className="desktop" src={mobiebo_next_pc} />
                <img className="mobile" src={mobiebo_next_pc} />
              </div>
              <p className="concept__box--separation"></p>
              <p className="concept__box--text fontnoto-600 c-white">
                モビエボ
                <br className="mobile" />
                NEXTとは
              </p>
            </div>
            <p className="des-bottom fontnoto-500 c-white">
              モビエボの「次」を見出し、発掘していくための視聴者参加型のオンラインイベント。モビリティビジネスに関心があり、次のアクションを考えるビジネスパーソンを対象に、よりリアルにビジネス視点で議論し、次世代のモビリティビジネスを生み出す場を目指す。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
