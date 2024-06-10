import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logo from '../images/logo.png'; // Ensure you have the logo image
import sun from '../images/sun.png'

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoWrapper>
          <Logo src={logo} alt="Travel Blog Logo" />
          <SpinO className="o1"><img src={sun}/></SpinO>
          <SpinO className="o2"><img src={sun}/></SpinO>
        </LogoWrapper>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to{ transform: rotate(360deg); }
  
`;

const HeaderContainer = styled.header`
  display: flex;
  height: 64px;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Logo = styled.img`
  height: 27px;
`;

const SpinO = styled.span`
  position: absolute;
  width: 43px; /* adjust size based on your logo */
  height: 43px; /* adjust size based on your logo */
  background-color: transparent; /* adjust to match background */
  border-radius: 50%;
  border: 1px solid transparent; /* adjust to make it visible for positioning */
  transition: transform 0.5s;

 

  &:hover {
    animation: ${spin} 2s ease infinite; /* Adjust duration and timing function as needed */
    transform-origin: center;
    
  }

  &.o1 {
    top: -6px; /* adjust based on logo position */
    left: 74px; /* adjust based on logo position */
  }

  &.o2 {
    top: -6px; /* adjust based on logo position */
    left: 286px; /* adjust based on logo position */
  }
`;

