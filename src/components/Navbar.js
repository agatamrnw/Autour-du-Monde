import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavLink to='/'>Main Page</NavLink>
      <NavLink to='/destinations'>Destinations</NavLink>
      <NavLink to='/map'>Map</NavLink>
      <NavLink to='/gallery'>Gallery</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/about'>About Me</NavLink>
      <SearchBar type="text" placeholder="Search" />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: #fffff;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  font-family: Chivo;

  &:hover {
    color: #FFBE98
  }
`;

const SearchBar = styled.input`
  padding: 5px;
  font-size: 16px;
`;
