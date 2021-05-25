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
    max-height: 5rem !important;
  }
`;

const Header = () => (
  <Container className="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://www.packrs.co/images/packrs-logo.svg"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">About</a>
        <a class="navbar-item">Supports</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Header;
