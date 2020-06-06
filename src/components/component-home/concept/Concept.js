import React from 'react';
import imgMobievo from '../../../images/mobievo@2x.png';
import imgGroup972 from '../../../images/Group 979@2x.png';
import './concept.scss';
export default function Concept() {
  return (
    <div className="concept grid-full">
      <div className="concept__wrap grid">
        <div className="concept__group-901">
          <h1 className="content__group-901__title">Concept</h1>
          <div className="concept__group-901__content">
            <p>移動は人間の本能。</p>
            <p>馬から鉄道、クルマ、飛行機と、人間は移動によって文明を進化させてきた。 現代も、物流は不可欠なインフラであり、旅行や観光は巨大産業に成長した。</p>
            <p>その「移動」がいま、変革期を迎えている。</p>
            <p>運転の担い手は人からAIに。クルマは所有するモノから、 シェアするサービスへ。テクノロジーが、移動の概念を覆しつつある。</p>
            <p>「移動＝モビリティ」を問い直すことで、これからのビジネス、 そして世界の動きが見えてくるー。</p>
            <p>今こそ、移動を考えよう。</p>
          </div>
        </div>
        <div className="concept__group-980">
          <div className="concept__group-980__item">
            <div className="concept__group-980__title">
              <img src={imgMobievo} />
              <span>モビエボとは</span>
            </div>
            <p className="concept__group-980__content">
              次世代の移動をテーマにした、オンライン番組をNewsPicksとYouTubeで配信中。毎月、モビリティサービスを手掛けるスタートアップに密着取材し、スタジオでは有識者を交えて、これからのモビリティビジネスについて議論している。
            </p>
          </div>
          <div className="concept__group-980__item">
            <div className="concept__group-980__title">
              <img src={imgGroup972} />

              <span>モビエボとは</span>
            </div>
            <p className="concept__group-980__content">
              次世代の移動をテーマにした、オンライン番組をNewsPicksとYouTubeで配信中。毎月、モビリティサービスを手掛けるスタートアップに密着取材し、スタジオでは有識者を交えて、これからのモビリティビジネスについて議論している。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
