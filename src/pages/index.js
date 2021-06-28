import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

import HomeHero from '../components/HomeHero';
import Items from '../components/Items';
import Information from '../components/Information';
import Choice from '../components/Choice';
import Pictures from '../components/Pictures';

const Index = () => {
  return (
    <Layout>
      <NextSeo title="Packrs" description="packrs website" />
      <HomeHero />
      <Items />
      <Information />
      <Choice />
      <Pictures />
    </Layout>
  );
};

export default Index;
