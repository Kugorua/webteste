import React from 'react';
import './event-outline.scss';
export default function EventOutline() {
  return (
    <div className="site_wrap--padding event">
      <div className="event__title">
        <h3>EVENT OUTLINE</h3>
        <p>
          かつてなく移動が制限される経験をした2020年。これからの「移動」はどうなるのか。自動車メーカー、鉄道、不動産、小売りなど、これまでの業種、業界の垣根を越えて、新しいモビリティビジネスのチャンスがどこにあるのか、どのように育てていくのかを、産学それぞれの立場から議論する。
        </p>
      </div>
      <div className="event__box">
        <div className="event__box__item">
          <div className="title">時期</div>
          <div className="content">7月下旬</div>
        </div>
        <div className="event__box__item">
          <div className="title">時間</div>
          <div className="content">平日の夜　19時～　2時間程度</div>
        </div>
        <div className="event__box__item">
          <div className="title">形式</div>
          <div className="content">オンラインイベント TOKYO JCT から配信</div>
        </div>
        <div className="event__box__item">
          <div className="title">定員</div>
          <div className="content">150人程度</div>
        </div>
        <div className="event__box__item">
          <div className="title">テーマ</div>
          <div className="content">
            モビリティビジネスはどこで生まれるのか、モビリティアントレプレナーシップ
          </div>
        </div>
      </div>
    </div>
  );
}
