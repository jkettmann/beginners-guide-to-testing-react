import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, NavLink } from './Header.style';

function Header() {
  return (
    <Container as="header">
      <Link to="/">
        <Logo />
      </Link>

      <nav>
        <NavLink to="/how-it-works">
          How it works
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>
      </nav>
    </Container>
  );
}

export default Header;
