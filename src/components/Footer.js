import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
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

const FooterContainer = styled.footer`
  background-color: #101522;
  padding: 20px 0;
`;

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  color: #fff;
`;

const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
