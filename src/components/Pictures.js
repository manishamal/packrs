import styled from 'styled-components';

const Section = styled.div`
  .is-font-size {
    font-size: 1.5rem !important;
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
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left" />
                  <div className="media-content">
                    <p className="title is-size-4 is-margin">Become a Packrs</p>
                    <p className="subtitle is-size-6 has-text-black is-line-height has-text-weight-normal">
                      Become a rider and enjoy the freedom to fit work around
                      your life. Plus great fees, perks and discounts.
                      <div className="buttons">
                        <button
                          type="button"
                          className="button is-button has-text-white mt-3"
                        >
                          <h1>
                          <h1>Find out more 👉 </h1>

                          </h1>
                        </button>
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
                    alt="Placeholder img"
                  />
                </figure>
              </div>

              <div className="card-content">
                <div className="media">
                  <div className="media-right" />
                  <div className="media-content">
                    <p className="title is-size-4 is-font-size is-margin">
                      Partner with us
                    </p>
                    <p className="subtitle is-size-6 has-text-black is-line-height has-text-weight-normal">
                      Partner with Packrs and reach more customers than ever. We
                      handle delivery, so you can focus on the business.
                      <div className="buttons">
                        <button
                          type
                          className="button is-button has-text-white mt-3"
                        >
                          <h1>Find out more 👉 </h1>
                        </button>
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
