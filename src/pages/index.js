import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Concept from '../components/component-home/concept/Concept';
import EventOutline from '../components/component-home/event-outline/EventOutline';
import Speakers from '../components/component-home/speakers/Speakers';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Concept />
    <EventOutline />
    <Speakers />
  </Layout>
);

export default IndexPage;
