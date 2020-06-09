import React, { useState } from 'react';
import { useForm } from 'react-hook-form/dist/react-hook-form.ie11';
import './event-form.scss';

const EventForm = () => {
  const { register, handleSubmit, errors } = useForm();
  let [selects, setSelect] = useState({ other1: false, other2: false, other3: false });
  const onSubmit = (data) => console.log(data);
  const selectOrther1 = (e) => {
    if (e.target.value === 'other1') {
      setSelect({ ...selects, [e.target.value]: !selects[e.target.value] });
    } else {
      setSelect({ ...selects, other1: false });
    }
  };
  const selectOrther2 = (e) => {
    if (e.target.value === 'other2') {
      setSelect({ ...selects, [e.target.value]: !selects[e.target.value] });
    } else {
      setSelect({ ...selects, other2: false });
    }
  };
  const selectOrther3 = (e) => {
    if (e.target.value === 'other3') {
      setSelect({ ...selects, [e.target.value]: !selects[e.target.value] });
    } else {
      setSelect({ ...selects, other3: false });
    }
  };

  const validateEmail = (event) => {
    console.log(event);
    if (!/\S+@\S+\.\S+/.test(event)) {
      return false;
    }
    return true;
  };

  console.log(errors.fullname);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-detail">
      <div className="form-detail__fields">
        <div className="form-detail__fields--input">
          <label>氏名</label>
          <input name="fullname" ref={register({ required: true, maxLength: 20 })} />
          {errors.fullname && errors.fullname.type === 'required' && <p className="form-detail__errors--color">Full name is 必須項目です </p>}
          {errors.fullname && errors.fullname.type === 'maxLength' && <p className="form-detail__errors--color">20文字以下で入力してください</p>}
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline--top"></div>
          <label>会社名（学校名）</label>
          <input name="company" ref={register({ required: true, maxLength: 20 })} />
          {errors.company && errors.company.type === 'required' && <p className="form-detail__errors--color">Company is 必須項目です </p>}
          {errors.company && errors.company.type === 'maxLength' && <p className="form-detail__errors--color">20文字以下で入力してください</p>}
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>業種（学部名）</label>
          <select name="industry" onChange={selectOrther1} ref={register({ required: true, maxLength: 20 })}>
            <option value="">選択して下さい</option>
            <option value="Item1">Item1</option>
            <option value="Item2">Item2</option>
            <option value="other1">その他</option>
          </select>
          {errors.industry && errors.industry.type === 'required' && <p className="form-detail__errors--color">Industry is 必須項目です </p>}
          {errors.industry && errors.industry.type === 'maxLength' && <p className="form-detail__errors--color">20文字以下で入力してください</p>}
        </div>
        {selects.other1 && (
          <div className="form-detail__fields--input">
            <div className="form-detail__fields--underline"></div>
            <label>業種（学部名）</label>
            <input name="industryOther" ref={register({ maxLength: true })} onClick={focus} />
            {errors.industryOther && errors.industryOther.type === 'maxLength' && <p className="form-detail__errors--color">20文字以下で入力してください </p>}
          </div>
        )}
        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>職種（学科名）</label>
          <select name="occupation" onChange={selectOrther2} ref={register({ required: true })}>
            <option value="">選択して下さい</option>
            <option value="Item1">Item1</option>
            <option value="Item2">Item2</option>
            <option value="other2">その他</option>
          </select>
          {/* 20 letter */}
        </div>
        {selects.other2 && (
          <div className="form-detail__fields--input">
            <div className="form-detail__fields--underline"></div>
            <label>職種（学科名）</label>
            <input name="occupationOther" ref={register({ maxLength: true })} />
            {errors.occupationOther && errors.occupationOther.type === 'maxLength' && <p className="form-detail__errors--color">20文字以下で入力してください</p>}
          </div>
        )}
        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>部署名</label>
          <input name="department" ref={register({ maxLength: true })} />
          {errors.department && errors.department.type === 'maxLength' && <p className="form-detail__errors--color">20文字以下で入力してください </p>}
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>役職名</label>
          <select name="position" onChange={selectOrther3} ref={register({ required: true })}>
            <option value="">選択して下さい</option>
            <option value="Item1">Item1</option>
            <option value="Item2">Item2</option>
            <option value="other3">その他</option>
          </select>
          {/* 20 letter  */}
        </div>
        {selects.other3 && (
          <div className="form-detail__fields--input">
            <div className="form-detail__fields--underline"></div>
            <label>役職名</label>
            <input name="positionOther3" ref={register({ maxLength: true })} />
            {errors.positionOther3 && errors.positionOther3.type === 'maxLength' && <p className="form-detail__errors--color">20文字以下で入力してください </p>}
          </div>
        )}

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>会社規模</label>
          <select name="company-class" ref={register({ required: true })}>
            <option value="">選択して下さい</option>
            <option value="startup">スタートアップ</option>
            <option value="listed">上場</option>
            <option value="private">非上場</option>
          </select>
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>URL</label>
          <input name="url" ref={register({ maxLength: 320 })} />
          {errors.url && errors.url.type === 'maxLength' && <p className="form-detail__errors--color">320文字以下で入力してください </p>}
        </div>

        <div className="form-detail__fields--input">
          <div className="form-detail__fields--underline"></div>
          <label>メールアドレス</label>
          <input name="email" ref={register({ required: true, maxLength: 320, validate: validateEmail })} />
          {errors.email && errors.email.type === 'maxLength' && <p className="form-detail__errors--color">320文字以下で入力してください </p>}
          {errors.email && errors.email.type === 'validate' && <p className="form-detail__errors--color">正しいメールアドレスの形式で入力して下さい </p>}
        </div>

        <div className="form-detail__fields--textarea">
          <div className="form-detail__fields--underline"></div>
          <label>あなたが取り組んでいる事業や研究内容についてご紹介ください</label>
          <textarea name="business-research" rows="10" ref={register({ required: true, maxLength: 1000 })} />
          {errors['business-research'] && errors['business-research'].type === 'maxLength' && <p className="form-detail__errors--color">320文字以下で入力してください </p>}
        </div>

        <div className="form-detail__fields--textarea">
          <div className="form-detail__fields--underline"></div>
          <label>自由記入欄（アピールポイントやビジョン、KINTOやトヨタへのご意見など）</label>
          <textarea name="free-text" rows="10" placeholder="アピールポイントやビジョン、KINTOやトヨタへのご意見など" ref={register({ maxLength: 1000 })} />
          {errors['free-text'] && errors['free-text'].type === 'maxLength' && <p className="form-detail__errors--color">1000文字以下で入力してください </p>}
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
        <input type="checkbox" className="form-detail__confirmation--checkbox" ref={register({ required: true })} />
        <p className="form-detail__confirmation--text">上記内容に同意する</p>
      </div>

      <div className="form-detail__btn-area">
        <button
          type="submit"
          className={
            errors.fullname ||
            errors.industry ||
            errors['business-research'] ||
            errors['free-text'] ||
            errors.email ||
            errors.industryOther ||
            errors.occupationOther ||
            errors.department ||
            errors.positionOther3 ||
            errors.url
              ? 'btn-disable'
              : 'form-detail__btn-area--submit-btn'
          }
        >
          送信
        </button>
      </div>
    </form>
  );
};

export default EventForm;
