import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedItem>
        <FeaturedTitle>Travel Bucket List for 2024</FeaturedTitle>
        <ReadMoreLink to='/bucket-list'>Read more</ReadMoreLink>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Solo Trip Destinations</FeaturedTitle>
        <ReadMoreLink to='/solo-trips'>Read more</ReadMoreLink>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Budget Travel Tips</FeaturedTitle>
        <ReadMoreLink to='/budget-tips'>Read more</ReadMoreLink>
      </FeaturedItem>
    </FeaturedContainer>
  );
};

export default Featured;

const FeaturedContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: #e0e0e0;
`;

const FeaturedItem = styled.div`
  background: #fff;
  padding: 20px;
  width: 200px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FeaturedTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ReadMoreLink = styled(Link)`
  font-size: 14px;
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
