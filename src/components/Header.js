import Link from 'next/link';
import styled from 'styled-components';

const NavTitle = styled.div`
  align-self: center;
  a {
    font-weight: 900;

    :hover {
      color: #000;
    }
  }
`;

const Container = styled.nav`
  .navbar-item img {
  }
  .is-color-green {
    background-color: rgb(51, 183, 96);
  }
`;

const Image = styled.img`
  max-height: 3.89rem !important;
`;
const Heading = styled.a`
  font-weight: 700;
  font-size: 1.2rem;
`;
const Key = styled.h1`
h1:hover {
  background-color: green !important;
  `;

const Header = () => (

  <Container className="navbar" role="navigation" aria-label="main navigation">


    <div className="navbar-brand">
    <img src="https://www.packrs.co/images/hero-bg.png" />

      <a className="navbar-item" href="https://bulma.io">
        <Image src="https://www.packrs.co/images/packrs-logo.svg" />
      </a>



      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>


    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start is-size-5 has-text-weight-medium	">
        <Heading className="navbar-item has-text-black ">About</Heading>
        <Heading className="navbar-item has-text-black ">Supports</Heading>

      </div>

      <div className="navbar-end">
        <div className="navbar-item">


          <Key className="buttons">
            <h1 className="button is-primary is-color-green ">

              <strong className="has-text-weight-bold ">Become a packr</strong>
            </h1>
            <a className="button is-light has-text-weight-bold">
              Partner with us

            </a>

          </Key>
        </div>
      </div>
    </div>
  </Container>
);

export default Header;
