import React from 'react';
import './speakers.scss';
import user1 from '../../../images/hinh1.jpg';
import user2 from '../../../images/hinh2.jpg';
import user3 from '../../../images/hinh3.jpg';

import icon__buttonmenu from '../../../svgs/icon__buttonmenu.svg';

export default function Speakers() {
  return (
    <div className="bg__speaker" id="scroll-speaker">
      <div className="bg__speaker--1"></div>
      <div className="bg__speaker--2"></div>
      <div className="bg__speaker--3"></div>
      <div className="bg__speaker--4"></div>
      <div className="bg__speaker--5"></div>
      <div className="bg__speaker--6"></div>
      <div className="bg__speaker--7"></div>
      <div className="bg__speaker--8">
        <div className="site_wrap--padding speaker">
          <h3 className="speaker__title" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
            SPEAKERS
          </h3>
          <div className="speaker__box">
            <div className="speaker__box__item" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
              <div className="thumbnail">
                <img src={user1} alt="Speaker" />
                <p className="thumbnail__text thumbnail__text--above">モビリティビジネスのトップランナー</p>
                <p className="thumbnail__text thumbnail__text--below">小寺信也</p>
              </div>
              <div className="speaker__box__item--text">
                株式会社KINTO　代表取締役社長　/トヨタファイナンシャルサービス　取締役上級副社長<br className="mobile" />1984年一橋大学商学部卒業後、トヨタ自動車株式会社入社。海外企画部などを経て、2013年常務役員に就任。2018年よりトヨタファイナンシャルサービス株式会社取締役上級副社長に就任し、2019年に株式会社KINTO設立後、同社取締役社長も兼務する
              </div>
            </div>
            <div className="speaker__box__item" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
              <div className="thumbnail">
                <img src={user2} alt="Speaker" />
                <p className="thumbnail__text thumbnail__text--above">モビリティビジネスのトップランナー</p>
                <p className="thumbnail__text thumbnail__text--below">小寺信也</p>
                <p className="thumbnail__text thumbnail__text--center">DUMMY</p>
              </div>
              <div className="speaker__box__item--text">
                株式会社ナビゲータープラットフォーム取締役/Longine編集長. 株式会社OneMile Partners 代表取締役/Chief Contents Officer. GFリサーチ合同会社代表. 東京工業大学大学院非常勤講師.
                以前はFidelity Internationalや日本生命でポートフォリオマネージャーや証券アナリスト. 米国や欧州の小売やネット, メディア, 日本のエレクトロニクス, ゲーム,
                機械産業等テクノロジーセクターが専門. 著書「銀行はこれからどうなるのか」（クロスメディア）「Google vs トヨタ」(KADOKAWA)「日本の電機産業」(日本経済新聞社出版)
                慶應義塾大学大学院修士課程修了
              </div>
            </div>
            <div className="speaker__box__item" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
              <div className="thumbnail">
                <img src={user3} alt="Speaker" />
                <p className="thumbnail__text thumbnail__text--above thumbnail__text--brown">モビリティ起業家</p>
                <p className="thumbnail__text thumbnail__text--brown thumbnail__text--below thumbnail__text--bg">
                  森口 拓也
                </p>
                <p className="thumbnail__text thumbnail__text--center">DUMMY</p>
              </div>
              <div className="speaker__box__item--text">
                Mellow Inc. 代表取締役  大学2年生で起業。創業1年半で上場企業にバイアウト。その後匿名チャットアプリ「ひまチャット」「Hit Me Up!」を合わせて500万DL以上まで成長させる。現在はモビリティ・スペース・お客さんのマッチングプラットフォームを提供するMellowの共同代表。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
