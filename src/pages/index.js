import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import Homehero from '../components/Homehero';

const Index = () => {
  return (
    <Layout>
      <NextSeo
        title="Kickoff NextJs"
        description="A short des
        cription goes here."
      />
      <Homehero />
    </Layout>
  );
};

export default Index;
