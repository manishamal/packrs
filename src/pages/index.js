import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import Homehero from '../components/Homehero';
import Items from '../components/Items';

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
    </Layout>
  );
};

export default Index;
