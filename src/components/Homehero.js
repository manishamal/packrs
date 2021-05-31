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
const H1 = styled.a`
font-size: 3.4rem !important;
font-weight: 700 !important;
`;


const Homehero = () => {
  return (
    <Container className="section">
      <div className="container">
        <div class="columns is-mobile">
          <div class="column is-5">
            <H1 className="bd-notification is-size-1 has-text-weight-medium has-text-black">
              Get anything delivered to your doorstep, office, cafe, school,
              anywhere imaginative .
            </H1>
            <div class="field is-grouped">
              <p class="control is-expanded py-3">
                <input
                  class="input"
                  type="text"
                  placeholder="your mobile number"
                />
              </p>
              <p class="control py-3">
                <a class="button is-info is-color-green ">Start ordering</a>
              </p>
            </div>
            <p className="is-size-5 has-text-black">
              We’ll send you a text with a link to download the app.
            </p>

            <p class="buttons is-padding">
              <div className="">
                <img
                  className="is-height"
                  src="https://www.packrs.co/images/store-ios.png"
                />

                <img
                  className="is-height"
                  src="https://www.packrs.co/images/store-android.png"
                />
              </div>
            </p>
          </div>

          <div class="column is-offset-1">
            <figure class="image is-square">
              <img src="https://www.packrs.co/images/hero-bg.png" />
            </figure>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Homehero;
