import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../images/search.png'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <SearchBarContainer>
      <SearchWrapper>
      <SearchIcon src={searchIcon} alt="Search Icon" />
        <SearchInput
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
        
      </SearchWrapper>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 60%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px; /* Added padding-right for icon */
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px; /* Adjust size based on your icon */
  height: 20px; /* Adjust size based on your icon */
`;
