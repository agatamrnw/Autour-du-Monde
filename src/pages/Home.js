import React from 'react';
import HeroSection from '../components/HeroSection';
import Featured from '../components/Featured';
import styled from 'styled-components';


const Home = () => {
  return (
    <>
    <HeroTitle>
      <h2>Latest</h2>
    </HeroTitle>
      <HeroSection />
      
      <FeaturedTitle>
        
        <h2>Featured Posts</h2>
        
      </FeaturedTitle>
      <Featured />
    </>
  );
};

export default Home;


const HeroTitle=styled.div`
  margin: auto;
  margin-top: 48px;
  display: flex;
  justify-content:center;
  font-family: 'Cinzel', serif;
  position: relative;

  width: 313px;

  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #000;
    margin: 56px 10px;
    width: 56px;
  }


  h2{
    font-size: 40px;
  font-weight: normal;
  letter-spacing: .5rem;
  }
`;


const FeaturedTitle=styled.div`
  margin: auto;
  display: flex;
  margin-top: 120px;
  justify-content:center;
  font-family: 'Cinzel', serif;
  position: relative;

  width: 536px;

  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #000;
    margin: 56px 10px;
    width: 56px;
  }


  h2{
    font-size: 40px;
  font-weight: normal;
  letter-spacing: .5rem;
  }
`;
