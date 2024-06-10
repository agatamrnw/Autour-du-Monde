import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../images/search.png'; 

const SearchBar = ({ onSearch, onFocus, onBlur }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
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
          onFocus={onFocus}
          onBlur={onBlur}
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
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px; 
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  &:focus{
    outline-style: solid;
    outline-color:#C6C09C;
   
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;
