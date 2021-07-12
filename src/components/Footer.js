import styled from 'styled-components';

const Container = styled.div``;
const Ul = styled.li`
  list-style: none;
`;
const Div = styled.div`
  background-color: rgb(28, 19, 35);
`;

const data = [
  {
    title: 'Download The App',
    list: '',
    image: 'https://www.packrs.co/images/store-ios.png',
    image1: 'https://www.packrs.co/images/store-android.png',
  },
  {
    title: 'Packrs',
    list: 'About Us!',
    list1: 'News & Updates',
    list2: 'Support',
    list3: 'Server Stats',
    list4: 'Support',
  },
  {
    title: 'Our Information',
    list: 'FAQ',
    list1: 'Privacy Policy',
    list2: 'Terms & Conditions',
  },
  {
    title: 'Reach Us',
    list: 'Careers',
    list1: 'Apply as Business',
    list2: 'Apply as Rider',
    list3: 'Contact Us',
  },
];

const Footer = () => {
  return (
    <Div className="section">
      <Container className="container mt-6 ">
        <div className="columns ">
          {data.map((item) => (
            <div className="column ">
              <div className="content ">
                <h1 className="has-text-white">{item.title}</h1>

                <Ul>
                  <span className="list has-text-white">
                    <li>{item.list}</li>
                    <li>{item.list1}</li>
                    <li>{item.list2}</li>
                    <li>{item.list3}</li>
                    <li>{item.list4}</li>
                  </span>
                </Ul>
                {item.image && item.image1 && (
                  <figure className="image is-128x128 ">
                    <div className="level-item has-text-centered ">
                      {item.image && (
                        <img alt="" className="ml-6" src={item.image} />
                      )}
                      {item.image1 && (
                        <img alt="" className="ml-2" src={item.image1} />
                      )}
                    </div>
                  </figure>
                )}

                <div />
              </div>
            </div>
          ))}
        </div>
        <div className="columns ">
          <div className="column is-10">
            <p className="has-text-white">
              © 2021 Packrs | Made with ❤️ in Punjab, India, and on the
              Internet.{' '}
            </p>
          </div>
          <div className="column ">
            <i className="fab fa-facebook-square icon is-medium has-text-white" />

            <i className="fab fa-instagram icon is-medium has-text-white" />

            <i className="fab fa-twitter-square icon is-medium has-text-white" />

            <i className="fab fa-invision icon is-medium has-text-white" />
          </div>
        </div>
      </Container>
    </Div>
  );
};

export default Footer;
