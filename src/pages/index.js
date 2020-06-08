import React from 'react';
import LazyLoad from 'react-lazyload';

import Layout from '../components/layout';
import Header from '../components/component-home/header/Header';
import Banner from '../components/component-home/banner/Banner';
import Concept from '../components/component-home/concept/Concept';
import EventOutline from '../components/component-home/event-outline/EventOutline';
import Speakers from '../components/component-home/speakers/Speakers';
import Movie from '../components/component-home/movie/Movie';
import Tokyo from '../components/component-home/Tokyo/Tokyo';
import Footer from '../components/component-home/footer/Footer';

const IndexPage = () => (
  <Layout>
    <Header />

    <Banner />

    <Concept />

    <EventOutline />

    <Speakers />

    <Movie />

    <Tokyo />

    <Footer />
  </Layout>
);

export default IndexPage;
