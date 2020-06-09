import React from 'react';
import SEO from '../components/seo';
import FormLayout from '../components/component-form/FormLayout';
import EventFormSubmit from '../components/component-form/event-form-submit/EventFormSubmit';

const eventFormSubmit = () => {
  return (
    <FormLayout>
      <SEO title="Event Form Submitted" />
      <EventFormSubmit />
    </FormLayout>
  );
};

export default eventFormSubmit;
