
import React from 'react';
import Layout from '../layout/Layout';
import HeroSection from '../component/HeroSection';
import InsuranceCardsSection from '../component/InsuranceCardsSection';
import Quote from '../component/Quote';
import ChooseUs from '../component/ChooseUs';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <InsuranceCardsSection />
      <Quote />
      <ChooseUs />
    </Layout>
  );
};

export default Home;