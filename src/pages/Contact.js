import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactContainer>
    <Image src='/assets/contact.jpg'/>

    <ContactContent>
    <Title>Contact Us</Title>
    <Section>
    <h2>Contact</h2>
    <a>contact@admonde</a>
    </Section>
    <Section>
    <h2>Based in</h2>
    <p>Los Angeles, California</p>
    </Section>
    
    
    <Links>
        <Link src='/assets/instagram.png'/>
        <Link src='/assets/facebook.png'/>
      </Links>
    </ContactContent>
      
    </ContactContainer>
  );
};

export default Contact;

const Section = styled.div`
  margin-bottom: 48px;
`;


const Links = styled.div`
display: flex;
margin-top: 48px;

`;

const Link = styled.img`
width: 24px;
height: 24px;
margin-right: 24px;
`;
const ContactContainer = styled.div`
margin: auto;
margin-top: 48px;
margin-bottom: 96px;
padding: 24px;
  max-width: 960px;
  display: flex;
  justify-content: center;
  a{
    cursor: pointer;

  }
`;

const Image = styled.img`
width: 50%;
height: auto;
`;

const ContactContent = styled.div`
  padding-top: 0;
  margin-left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Chivo';
  font-weight: 200;
  h2{
    font-weight: 400;
  }
`;

const Title = styled.h1`
margin-top: 0;
font-family: 'Cinzel';
font-size: 40px;
  font-weight: normal;
  letter-spacing: .3rem;
`;