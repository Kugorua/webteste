import React from 'react';
import './event-outline.scss';
export default function EventOutline() {
  return (
    <div className="bg__event" id="scroll-event">
      <div className="bg__event--1"></div>
      <div className="bg__event--2"></div>
      <div className="bg__event--3"></div>
      <div className="bg__event--4">
        <div className="site_wrap--padding event">
          <div className="event__title" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
            <h3>EVENT OUTLINE</h3>
            <h4>モビリティビジネスは辺境で生まれる</h4>
            <p>
              かつてなく移動が制限される経験をした2020年。これからの「移動」はどうなるのか。自動車メーカー、鉄道、不動産、小売りなど、これまでの業種、業界の垣根を越えて、新しいモビリティビジネスのチャンスがどこにあるのか、どのように育てていくのかを、産学それぞれの立場から議論する。
            </p>
          </div>
          <div className="event__box" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
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
              <div className="content">モビリティビジネスはどこで生まれるのか、モビリティアントレプレナーシップ</div>
            </div>

            <table className="event__box__table">
              <tbody>
                <tr>
                  <th>時期</th>
                  <td>7月下旬</td>
                  <th>時間</th>
                  <td>平日の夜　19時～　2時間程度</td>
                </tr>
                <tr>
                  <th>形式</th>
                  <td>オンラインイベント TOKYO JCT から配信</td>
                  <th>定員</th>
                  <td>150人程度</td>
                </tr>
                <tr>
                  <th>テーマ</th>
                  <td colSpan="3">モビリティビジネスはどこで生まれるのか、モビリティアントレプレナーシップ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="footer_box" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
            <div className="item_box">
              <div className="item_box--item">
                <div className="content">
                  <p><span>PROGRAM 1</span><span>講演</span></p>
                  <p>斎藤祐馬 「アフターコロナのスタートアップ事情」<br className="mobile"/>
                    <br />
                  泉田良輔「テクノロジーが引き寄せるモビリティ革命のリアル」
                  </p>
                </div>
                <div className="shape1"></div>
              </div>
              <div className="item_box--center">
              </div>
              <div className="item_box--item">
                <div className="shape2">
                </div>
                <div className="content">
                  <p><span>PROGRAM 2</span><span>パネルディスカッション</span></p>
                  <p>「モビリティ革命最前線で何が起きているのか」</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
