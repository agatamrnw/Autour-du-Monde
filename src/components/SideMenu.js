// SideMenu.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideMenu = ({ results, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <SideMenuContainer>
      {results.length > 0 ? (
        results.map((result, index) => (
          <MenuItem key={index}>
            <StyledLink to={`/destinations/${result.id}`}>
              {result.name}
            </StyledLink>
            <hr color='#f4f4f4'></hr>
          </MenuItem>
        ))
      ) : (
        <NoResults>No results found</NoResults>
      )}
    </SideMenuContainer>
  );
};

export default SideMenu;

const SideMenuContainer = styled.div`
  position: absolute;
  top: 150px;
  right:160px;
  width: 140px;
  height: fit-content;
  background-color: #ffffff;
  box-shadow: -2px 0  5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  padding: 32px;
  z-index: 1000;
`;

const MenuItem = styled.div`
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;

  &:hover {
    color: #C6C09C;
  }
`;

const NoResults = styled.div`
  color: #999;
  font-size: 18px;
`;
