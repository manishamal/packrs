import styled from 'styled-components';


const Section = styled.div`
  .is-font-size {
    font-size: 1.5rem !importent;
  }
  .is-margin {
    margin-bottom: 2.5rem;
    font-weight: 600;
  }
    .is-line-height {
      line-height: 1.5rem;
    }
    .is-button {
      background-color: rgb(114, 102, 153);
    }

`;

const Pictures = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://www.packrs.co/images/Become.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-size-4 is-margin">Become a Packrs</p>
                    <p className="subtitle is-size-6 has-text-black is-line-height has-text-weight-normal">
                      Become a rider and enjoy the freedom to fit work around
                      your life. Plus great fees, perks and discounts.
                      <div class="buttons">
                        <button class="button is-button has-text-white mt-3">Find out more <i class="fal fa-hand-point-right"></i></button>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://www.packrs.co/images/Partner.Png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>

              <div className="card-content">
                <div className="media">
                  <div className="media-right"></div>
                  <div className="media-content">
                    <p className="title is-size-4 is-font-size is-margin">
                      Partner with us
                    </p>
                    <p className="subtitle is-size-6 has-text-black is-line-height has-text-weight-normal">
                      Partner with Packrs and reach more customers than ever. We
                      handle delivery, so you can focus on the business.
                      <div class="buttons">
                        <button class="button is-button has-text-white mt-3">Find out more <i class="fas fa-hand-point-right"></i></button>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Pictures;
