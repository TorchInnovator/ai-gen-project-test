import React from 'react';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <FeatureGrid />
    </Layout>
  );
};

export default IndexPage;
