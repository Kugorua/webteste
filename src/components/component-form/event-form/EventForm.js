import React from 'react';
import './event-form.scss';

const EventForm = () => {
  return (
    <div className="form-detail">
      <div className="form-detail__btn-area">
        <button type="submit" className="form-detail__btn-area--submit-btn">
          送信
        </button>
      </div>
    </div>
  );
};

export default EventForm;
