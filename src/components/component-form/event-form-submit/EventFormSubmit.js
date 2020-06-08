import React from 'react';
import './event-form-submit.scss';
import { Link } from 'gatsby';

const EventFormSubmit = () => {
  return (
    <div className="form-submit">
      <p className="form-submit__message">ご応募ありがとうございました</p>
      <div className="form-submit__btn-area">
        <Link to="/" className="form-submit__btn-area--root-btn">
          サイトトップへ
        </Link>
      </div>
    </div>
  );
};

export default EventFormSubmit;
