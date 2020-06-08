import React from 'react';
import './event-form.scss';

class EventForm extends React.component {
  state = {
    info: {
      name: '',
      companyName: '',
      companyUrl: '',
      email: '',
      doing: '',
      freeText: ''
    },
    message: {
      name: '',
      companyName: '',
      companyUrl: '',
      email: '',
      doing: '',
      freeText: ''
    },
    loading: true
  };

  render() {
    return (
      <div className="form-detail">
        <div className="form-detail__btn-area">
          <button type="submit" className="form-detail__btn-area--submit-btn">
            送信
          </button>
        </div>
      </div>
    );
  }
}
export default EventForm;
