import React from 'react';
import styled from 'styled-components';

const SearchResults = ({ results }) => {
  return (
    <ResultsContainer>
      {results.length === 0 ? (
        <NoResults>No results found</NoResults>
      ) : (
        results.map((result, index) => (
          <ResultItem key={index}>
            <h3>{result.name}</h3>
            <p>{result.description}</p>
          </ResultItem>
        ))
      )}
    </ResultsContainer>
  );
};

export default SearchResults;

const ResultsContainer = styled.div`
  margin: 20px;
`;

const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;

  h3 {
    margin: 0;
  }

  p {
    margin: 5px 0 0;
  }
`;

const NoResults = styled.p`
  font-size: 18px;
  color: #888;
`;
