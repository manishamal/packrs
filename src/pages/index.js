import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Layout from '../components/Layout';

import HomeHero from '../components/HomeHero';
import Items from '../components/Items';
import Information from '../components/Information';
import Choice from '../components/Choice';
import Pictures from '../components/Pictures';
// import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';

const HeroWrapper = styled.div`
  background-image: url(https://www.packrs.co/images/hero-bg.png);
  background-size: 55%;
  background-repeat: no-repeat;
  background-position: 100% 0%;
`;

const Index = () => {
  return (
    <Layout hideHeader>
      <NextSeo title="Packrs" description="packrs website" />
      <HeroWrapper>
        <Header />
        <HomeHero />
      </HeroWrapper>
      <Items />
      <Information />
      <Choice />
      <Pictures />
      <ContactUs />
    </Layout>
  );
};

export default Index;
