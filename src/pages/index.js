import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Concept from '../components/component-home/concept/Concept';
import EventOutline from '../components/component-home/event-outline/EventOutline';
import Speakers from '../components/component-home/speakers/Speakers';
import Tokyo from '../components/component-home/Tokyo/Tokyo';
import Movie from '../components/component-home/movie/Movie';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Concept />
    <EventOutline />
    <Speakers />
    <Movie />
    <Tokyo />
  </Layout>
);

export default IndexPage;
