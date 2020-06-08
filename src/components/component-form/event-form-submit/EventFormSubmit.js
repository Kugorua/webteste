import React from 'react';
import './event-form-submit.scss';
import { Link } from 'gatsby';

const EventFormSubmit = () => {
  return (
    <div className="form-detail">
      <p className="form-detail__message">ご応募ありがとうございました</p>
      <div className="form-detail__btn-area">
        <Link to="/" className="form-detail__btn-area--root-btn">
          サイトトップへ
        </Link>
      </div>
    </div>
  );
};

export default EventFormSubmit;
