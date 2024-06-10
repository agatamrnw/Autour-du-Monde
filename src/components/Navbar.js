import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch, onFocus, onBlur }) => {
  return (
    <NavContainer>
      <NavLinks>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/destinations">Destinations</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/blog">Blog Posts</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/aboutme">About Me</StyledLink>
        </NavItem>
      </NavLinks>
      <SearchBarContainer>
        <SearchBar onSearch={onSearch} onFocus={onFocus} onBlur={onBlur} />
      </SearchBarContainer>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 160px;
  margin-top: 5px;
  background-color: #ffffff;
  font-family: 'Chivo', sans-serif;
`;


const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #FFBE98;
  }
`;

const SearchBarContainer = styled.div`
  
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  
`;
