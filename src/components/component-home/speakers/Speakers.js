import React from 'react';
import './speakers.scss';
import imgSpeaker from '../../../svgs/speaker.svg';
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
                <img src={imgSpeaker} alt="Speaker" />
                <p className="thumbnail__text thumbnail__text--above">ベンチャー事情に精通</p>
                <p className="thumbnail__text thumbnail__text--below">斎藤 祐馬</p>
              </div>
              <div className="speaker__box__item--text">
                2010年よりトーマツ ベンチャーサポート株式会社（現 デロイト トーマツ ベンチャーサポート株式会社）の事業立ち上げに参画。 2019年デロイト トーマツ ベンチャーサポート
                代表取締役社長。公認会計士。 世界中の大企業の新規事業創出支援、ベンチャー政策の立案まで手掛けている。起業家が大企業100人にプレゼンを行う早朝イベントMorning
                Pitch発起人。主な著書は『一生を賭ける仕事の見つけ方』（ダイヤモンド社）。新聞・雑誌・テレビ・オンラインメディア等、メディア掲載多数。「2017年 日経ビジネス 次代を創る100人」に選出。
              </div>
            </div>
            <div className="speaker__box__item" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
              <div className="thumbnail">
                <img src={imgSpeaker} alt="Speaker" />
                <p className="thumbnail__text thumbnail__text--above">テクノロジー分野に精通したアナリスト</p>
                <p className="thumbnail__text thumbnail__text--below">泉田 良輔</p>
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
                <img src={imgSpeaker} alt="Speaker" />
                <p className="thumbnail__text thumbnail__text--above">テキストテキストテキスト</p>
                <p className="thumbnail__text thumbnail__text--below">白坂 成功</p>
                <p className="thumbnail__text thumbnail__text--center">DUMMY</p>
              </div>
              <div className="speaker__box__item--text">
                慶応義塾大学
                <br />
                東京大学大学院工学系研究科航空宇宙工学専攻 修士課程修了
                その後、三菱電機株式会社にて宇宙開発に従事。技術試験衛星VII型（ETS-VII）、宇宙ステーション補給機（HTV）等の開発に参加。特にHTVの開発では初期設計から初号機ミッション完了まで携わる。途中1年8ヶ月間、欧州の人工衛星開発メーカに駐在し、欧州宇宙機関（ESA）向けの開発に参加。「こうのとり」（HTV:
                H-II TransferVehicle）開発では多くの賞を受賞。
              </div>
            </div>
            <div className="speaker__box__item" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
              <div className="thumbnail">
                <img src={imgSpeaker} alt="Speaker" />
                <p className="thumbnail__text thumbnail__text--above thumbnail__text--green">学者　ベンチャーに詳しい</p>
                <p className="thumbnail__text thumbnail__text--below thumbnail__text--green thumbnail__text--bg">木谷 哲夫</p>
                <p className="thumbnail__text thumbnail__text--center">DUMMY</p>
              </div>
              <div className="speaker__box__item--text">
                京都大学　イノベーター・マネジメント・サイエンス研究本部　教授
                マッキンゼー・アンド・カンパニーにて、アソシエートプリンシパルを務め、自動車・機械・ハイテク・通信業界における戦略立案、オペレーション改善プロジェクト、金融機関の新規事業戦略プロジェクトなどを手がける。日本興業銀行およびメリル・リンチ・キャピタルマーケット（NY）にて、金融支援スキームの構築、プロジェクトファイナンスのクレジットリスク審査業務、M&Aアドバイザリー業務など企業金融業務を担当。企業再建ファーム、アリックス・パートナーズのディレクターとしてネットベンチャー企業、エアライン企業のターンアラウンド業務を担当した後、現在、京都大学産官学連携センター寄附研究部門教授。九州大学経済学府
                非常勤講師(企業戦略論)。
              </div>
            </div>
            <div className="speaker__box__item" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
              <div className="thumbnail">
                <img src={imgSpeaker} alt="Speaker" />
                <p className="thumbnail__text thumbnail__text--above thumbnail__text--brown">ファシリテーター</p>
                <p className="thumbnail__text thumbnail__text--brown thumbnail__text--below thumbnail__text--bg">
                  <span>NewsPicks</span> 呉琢磨
                </p>
                <p className="thumbnail__text thumbnail__text--center">DUMMY</p>
              </div>
              <div className="speaker__box__item--text">
                2000年から編集者としてカルチャー／IT・テクノロジーを中心に雑誌・書籍の制作に携わる。講談社「hot-dog
                PRESS」、リクルート「R25」など多数の媒体に参加。同時にブックライターとして多数のビジネス書を制作。2015年よりNewsPicksに参画し、Brand
                Designのクリエイティブディレクターを務める。現在はBrand Design編集長に就任。 （スタートアップ色を出す場合に担当）
              </div>
            </div>
            <div className="speaker__box__item" data-sal="slide-up" ata-sal-easing="ease-in-sine" data-sal-duration="1500" data-sal-delay="200">
              <div className="thumbnail">
                <img src={imgSpeaker} alt="Speaker" />
                <p className="thumbnail__text thumbnail__text--above thumbnail__text--brown">ファシリテーター</p>
                <p className="thumbnail__text thumbnail__text--brown thumbnail__text--below thumbnail__text--bg">
                  <span>NewsPicks</span> 久川桃子
                </p>
                <p className="thumbnail__text thumbnail__text--center">DUMMY</p>
              </div>
              <div className="speaker__box__item--text">
                一橋大学商学部卒業後、外資系金融機関を経て2002年、日経BP社に入社。日経ビジネス記者として医薬品、運輸などを担当。2度の育休の後、ソーシャル意識の高いママ向け雑誌「ecomom」のプロデューサー、編集長を務めた。2013年には国交省より超小型モビリティ実証実験を受託し、横浜市、東急電鉄、日産自動車とともに実施した。2015年3月より
                NewsPicksに移籍。ブランド広告を専門に手掛ける、Brand Designチームの立ち上げからチーフプロデューサーを務める。 （大企業色を出す場合に担当）
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
