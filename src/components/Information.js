import styled from 'styled-components';

const Section = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
  background-image: url(/images/about-app-bg.svg);
  background-repeat: no-repeat;
`;

const Information = () => {
  return (
    <div>
      <h1 className="has-text-centered is-size-2 has-text-weight-semibold has-text-black mb-5">
        Get it done with Packrs
      </h1>
      <center>
        <figure className="image is-128x128  ">
          <img src="https://driveulu.com/uploads/media/5c4b31208436685436637d79/original-7c0b4e81246aa8097285422bc2fc3a26.png" />
        </figure>
      </center>

      <Section className="section hero is-medium">
        <div className="container" />
      </Section>
    </div>
  );
};
export default Information;
