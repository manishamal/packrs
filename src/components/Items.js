import styled from 'styled-components';

const Section = styled.div`
  .image {
    display: inline-block;
    margin: auto;
  }
  .is-padding {
    padding: 1rem 0.5rem;
  }
`;
const Div = styled.div`
  :hover {
    box-shadow: rgb(0 0 0 / 8%) 0px 7px 18px;
  }
`;
const data1 = [
  {
    title: 'Pick n Drop',
    image: 'https://www.packrs.co/images/categories/Courier-1.png',
  },
  {
    title: 'Food & Drinks',
    image: 'https://www.packrs.co/images/categories/Drink-1.png',
  },
  {
    title: 'Groceries',
    image: 'https://www.packrs.co/images/categories/Grocery-2.png',
  },
  {
    title: 'Fruit & Veg',
    image: 'https://www.packrs.co/images/categories/Veg-1.png',
  },
  {
    title: 'Meat & Fish',
    image: 'https://www.packrs.co/images/categories/Meat-1.png',
  },
  {
    title: 'Pharmacy',
    image: 'https://www.packrs.co/images/categories/Medicine-2.png',
  },
  {
    title: 'Gifts & Stationary',
    image: 'https://www.packrs.co/images/categories/Gift-2.png',
  },
  {
    title: 'Electronics',
    image: 'https://www.packrs.co/images/categories/Electronic.png',
  },
];

const Items = () => {
  return (
    <Section className="section">
      <div className="container">
        <h1 className="has-text-centered is-size-2 has-text-weight-semibold has-text-black">
          What can get delivered with PACKRS
        </h1>

        <div className="columns is-multiline section is-vcentered">
          {data1.map((item) => (
            <div className="column  is-3 ">
              <Div className="ggg">
                <div className="section has-text-centered is-padding">
                  <div className="card-image ">
                    <figure className="image is-64x64">
                      {item.image && (
                        <img alt="" className="is-rounded" src={item.image} />
                      )}
                    </figure>
                  </div>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="" />
                    <div className="media-content">
                      <p className="title is-5 is-font-color-green has-text-centered">
                        {item.title}
                      </p>
                      <p className="subtitle is-6 has-text-black">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    <p className="subtitle is-6 has-text-black">
                      {item.paragraph1}
                    </p>
                  </div>
                </div>
              </Div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Items;
