import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bucket from '../images/bucket.png';
import solo from '../images/solo.png';
import budget from '../images/budget.png';

const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedItem>
        
        <FeaturedImage src={bucket}></FeaturedImage>
        <FeaturedTitle>Travel Bucket List for 2024</FeaturedTitle>
        <ReadMoreLink to='/bucket-list'>Read more</ReadMoreLink>
      </FeaturedItem>
      <FeaturedItem>
        
        <FeaturedImage src={solo}></FeaturedImage>
        <FeaturedTitle>Solo Trip Destinations</FeaturedTitle>
        <ReadMoreLink to='/solo-trips'>Read more</ReadMoreLink>
      </FeaturedItem>
      <FeaturedItem>
        
        <FeaturedImage src={budget}></FeaturedImage>
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
  padding: 20px 194px;
  margin-bottom: 120px;
  
  background: #ffffff;
`;

const FeaturedItem = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 240px;
  text-align: center;
  border: 1px solid #5C5C5C;
  &:hover{
    transform: scale(1.2);
    transition: 0.5s;
    border: 1px solid #C6C09C;
  }
`;

const FeaturedTitle = styled.h2`
  font-size: 18px;
  font-family: 'Chivo';
  font-weight: 300;
  margin-bottom: 10px;
`;

const ReadMoreLink = styled(Link)`
  font-size: 14px;
  font-family: 'Chivo';
  font-weight: 600;
  color: #C6C09C;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FeaturedImage = styled.img`
    width: 100%;
`;
