import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import Homehero from '../components/Homehero';
import Items from '../components/Items';
import Information from '../components/Information ';
import Choice from '../components/Choice ';

const Index = () => {
  return (
    <Layout>
      <NextSeo
        title="Kickoff NextJs"
        description="A short des
        cription goes here."
      />
      <Homehero />
      <Items />
      <Information />
      <Choice />
    </Layout>
  );
};

export default Index;
