/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';

const Section = styled.section`
  img {
    border-radius: 24px;
  }
`;
const P = styled.p`
  /* font-size: 17px; */
  letter-spacing: 0.03rem !important;
`;

const FeedBack = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <h1 className="title is-size-2">He said; She said ✍️</h1>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <P className="has-text-weight-medium ">
                “Very Good App!!! just arrived in my hotel in Chandigarh and
                starving. didn't want leave hotel so I ordered for delivery
                using this app. Plus, I forgot my phone charger at home, Packrs
                delivered even phone charger to me.”
              </P>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <image
                      src="https://www.packrs.co/images/reviews/gurkaran.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">John Smith</p>
                  <p className="subtitle is-6">@johnsmith</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-content">
              <P className="has-text-weight-medium ">
                A good app and company, they do their best to make sure you get
                your order or are compensated fairly. If anything is missing or
                wrong definitely contact them, they are usually fast to fix the
                issue.
              </P>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <image
                      src="https://www.packrs.co/images/reviews/samar.jpg"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">Anushkha</p>
                  <p className="subtitle is-6">@anushkha4me</p>
                </div>
              </div>

              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default FeedBack;
