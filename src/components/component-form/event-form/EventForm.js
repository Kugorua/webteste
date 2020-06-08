import React from 'react';
import { useForm } from 'react-hook-form';
import './event-form.scss';

const EventForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-detail">
      <div className="form-detail__fields">
        <div className="form-detail__fields--input">
          <label>氏名</label>
          <input name="fullname" ref={register} />
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline--top"></div>
          <label>会社名（学校名）</label>
          <input name="company" ref={register} />
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>業界（学部名）</label>
          <select name="industry" ref={register}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>部署名</label>
          <input name="department" ref={register} />
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>役職名</label>
          <select name="position" ref={register}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>会社規模</label>
          <select name="company-class" ref={register}>
            <option value="startup">スタートアップ</option>
            <option value="listed">上場</option>
            <option value="private">非上場</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>URL</label>
          <input name="url" ref={register} />
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>メールアドレス</label>
          <input name="email" ref={register} />
        </div>

        <div className="form-detail__fields--textarea">
          <div className="form-detail__fields--underline"></div>
          <label>あなたが取り組んでいる事業や研究内容についてご紹介ください</label>
          <textarea name="business-research" rows="10" ref={register} />
        </div>

        <div className="form-detail__fields--textarea">
          <div className="form-detail__fields--underline"></div>
          <label>自由記入欄（アピールポイントやビジョン、KINTOやトヨタへのご意見など）</label>
          <textarea name="free-text" rows="10" placeholder="アピールポイントやビジョン、KINTOやトヨタへのご意見など" ref={register} />
        </div>

        <div className="form-detail__fields--privacy">
          <p>
            記載いただいたお客様の個人情報につきましては、NewsPicks個人情報保護方針（https://newspicks.com/policy/privacy-policy-ja/）及び以下の内容に従って取扱わせていただきます。
            <br />
            <br />
            ・共同利用について
            <br />
            記載いただいたお客様の個人情報について、以下に従い、共同利用させていただきます。
            <br />
            <br />
            １．共同利用する項目
            <br />
            会社名・役職・氏名・業種・職種・部署名・会社規模・従業員数・会社URL・メールアドレス
            <br />
            <br />
            ２．共同利用する者の範囲
            <br />
            トヨタファイナンシャルサービス株式会社その他TOKYO JCTの事務局（株式会社ニューズピックス/株式会社自動車新聞社）
            <br />
            <br />
            ３．共同利用の目的
            <br />
            NewsPicks個人情報保護方針第3項の記載と同様
            <br />
            <br />
            ４．個人データの管理に関する責任者
            <br />
            株式会社ニューズピックス
          </p>
        </div>
      </div>

      <div className="form-detail__confirmation">
        <input type="checkbox" className="form-detail__confirmation--checkbox" />
        <p className="form-detail__confirmation--text">上記内容に同意する</p>
      </div>

      <div className="form-detail__btn-area">
        <button type="submit" className="form-detail__btn-area--submit-btn">
          送信
        </button>
      </div>
    </form>
  );
};

export default EventForm;
