import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import copyright from '../images/copyright.png';
const Footer = () => {
  return (
    <FooterContainer>
    <Copyright>
      <img src={copyright}/>
      <CopyrightText>
      <p>Copyright.</p>
      <p>All rights reserved, 2024.</p>
      </CopyrightText>
      
    </Copyright>
      <FooterWrap>
        <FooterLinkTitle>About Us</FooterLinkTitle>
        <FooterLink to='/'>How it works</FooterLink>
        <FooterLink to='/'>Testimonials</FooterLink>
        <FooterLink to='/'>Careers</FooterLink>
        <FooterLink to='/'>Investors</FooterLink>
        <FooterLink to='/'>Terms of Service</FooterLink>
      </FooterWrap>
      <FooterWrap>
        <FooterLinkTitle>Contact Us</FooterLinkTitle>
        <FooterLink to='/'>Contact</FooterLink>
        <FooterLink to='/'>Support</FooterLink>
        <FooterLink to='/'>Destinations</FooterLink>
        <FooterLink to='/'>Sponsorships</FooterLink>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
const Copyright = styled.div`
  display:flex;
  margin-top:20px;
  margin-left: 160px;
  margin-right: 240px;
  justify-content: flex-start; 
  align-items: flex-start;
  color: #FFBE98;
  img{
    width:24px;
    height:24px;
    margin:0px;
  }
`;

const CopyrightText = styled.div`
  display:flex;
  flex-direction: column;
  padding: 0;
  margin-left: 24px;
  justify-content: flex-start;
  p{
    margin: 0px;
    font-family:'Chivo';
    font-weight: 400;
    font-size: 14px;
  }
`;
const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 20px 160px 40px 160px;
  font-family: 'Chivo';
  display:flex;
  justify-content: space-between;
  margin: 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 1100px;
  margin: 0px 120px 0px 40px ;
  color: #000;
  
`;

const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-weight: 300;
`;

const FooterLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    transition: 0.3s ease-out;
  }
`;
