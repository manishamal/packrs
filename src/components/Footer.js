import styled from 'styled-components';

const Container = styled.div`
  height: 6rem;
  align-content: center;
  align-items: center;
  /* background-color: black !important; */
`;
const data = [
  {

    title: 'Any product you need',
    subtitle: 'From food, fruits, gifts to keys we can get it for you!',
  },


const Footer = () => (
  <Container className="container">
    <div className="columns">
    {data.map((item) => (
      <div className="column ">First column
      <h1>{item.title}</h1>

        ))}
      </div>

      <p>© 2021 Packrs | Made with ❤️ in Punjab, India, and on the Internet.</p>
    </div>
  </Container>
);

export default Footer;
