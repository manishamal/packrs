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

        <div class="columns is-multiline section is-vcentered">
          {data1.map((item) => (
            <div class="column  is-3 ">
              <div class="card">
                <div className="section has-text-centered is-padding">
                  <div class="card-image ">
                    <figure class="image is-64x64">
                      {item.image && (
                        <img className="is-rounded" src={item.image} />
                      )}
                    </figure>
                  </div>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class=""></div>
                    <div class="media-content">
                      <p class="title is-5 is-font-color-green has-text-centered">
                        {item.title}
                      </p>
                      <p className="subtitle is-6 has-text-black">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div class="content">
                    <p className="subtitle is-6 has-text-black">
                      {item.paragraph1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
export default Items;
