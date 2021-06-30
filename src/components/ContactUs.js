import styled from 'styled-components';

const Section = styled.section`
  {
    background-color: rgb(114, 102, 153);
  }
`;
const Div = styled.div`
  {
    font-size: 1.25rem!important;

}
  }
`;

const ContactUs = () => {
  return (
    <Section className="hero is-medium ">

        <div className="hero-body">
          <p className="title has-text-centered is-size-1 has-text-weight-semibold has-text-white">
            Our Precense 📍{' '}
          </p>
          <div className="container">
          <Div className="columns has-text-centered has-text-white mt-6 ">
            <div className="column Subtitle 1">Canada</div>
            <div className="column Subtitle 1">United Kingdom</div>
            <div className="column Subtitle 1">India</div>
          </Div>
        </div>
      </div>
    </Section>
  );
};
export default ContactUs;
