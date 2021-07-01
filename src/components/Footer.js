import styled from 'styled-components';

const Container = styled.div`
  height: 6rem;
  align-content: center;
  align-items: center;
  /* background-color: black !important; */
`;
const Ul = styled.li`
  list-style: none;
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
    <Container className="container mt-6 ">
      <div className="columns ">
        {data.map((item) => (
          <div className="column ">
            <div className="content ">
              <h1>{item.title}</h1>

              <Ul>
                <li>{item.list}</li>
                <li>{item.list1}</li>
                <li>{item.list2}</li>
                <li>{item.list3}</li>
                <li>{item.list4}</li>
              </Ul>
              <figure className="image is-128x128 ">
              <div class="level-item has-text-centered">
                  {item.image && <img alt="" className="" src={item.image} />}
                  {item.image && <img alt="" className="" src={item.image1} />}
                </div>
              </figure>

              <div />
            </div>
          </div>
        ))}
      </div>

      <p>© 2021 Packrs | Made with ❤️ in Punjab, India, and on the Internet.</p>
    </Container>
  );
};

export default Footer;
