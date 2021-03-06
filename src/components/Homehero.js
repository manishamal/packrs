import styled from 'styled-components';

const Container = styled.div`
  .is-color-green {
    background-color: rgb(51, 183, 96);
  }
  .is-height {
    height: 46px;
    margin-right: 10px;
  }
  .is-padding {
    padding-top: 30px;
  }
`;

const Anchor = styled.a`
  font-size: 3.4rem !important;
  font-weight: 700 !important;
`;

const HomeHero = () => {
  return (
    <div className="section">
      <Container className="container">
        <div className="columns is-mobile">
          <div className="column is-half">
            <Anchor className="bd-notification is-size-1 has-text-weight-medium has-text-black">
              Get anything delivered to your doorstep, office, cafe, school,
              anywhere imaginative.
            </Anchor>
            <div className="field is-grouped">
              <p className="control is-expanded py-3">
                <input
                  className="input"
                  type="text"
                  placeholder="your mobile number"
                />
              </p>
              <p className="control py-3">
                <a className="button is-info is-color-green ">Start ordering</a>
              </p>
            </div>
            <p className="is-size-5 has-text-black">
              We’ll send you a text with a link to download the app.
            </p>

            <p className="buttons is-padding">
              <div className="">
                <img
                  className="is-height"
                  src="https://www.packrs.co/images/store-ios.png"
                  alt="packer"
                />

                <img
                  className="is-height"
                  src="https://www.packrs.co/images/store-android.png"
                  alt="packer"
                />
              </div>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default HomeHero;
