import React from 'react';
import SEO from '../components/seo';
import FormLayout from '../components/component-form/FormLayout';
import EventForm from '../components/component-form/event-form/EventForm';

const eventForm = () => {
  return (
    <FormLayout>
      <SEO title="Event Form" />
      <EventForm />
    </FormLayout>
  );
};

export default eventForm;
