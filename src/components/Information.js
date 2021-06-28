import styled from 'styled-components';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
  background-image: url(/images/about-app-bg.svg);
  background-repeat: no-repeat;
  background-position-y: 100%;
`;

const Information = () => {
  return (
    <div>
      <h1 className="has-text-centered is-size-2 has-text-weight-semibold has-text-black mb-5">
        What can get delivered with PACKRS
      </h1>
      <Section className="section hero is-medium">
        <div className="container" />
      </Section>
    </div>
  );
};
export default Information;
