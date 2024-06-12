import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <Container>
      <Content>
        <Image src='/assets/me.jpg' alt="Ann's Picture" />
        <Section className='item1'>
          <Title>Hi, I'm Ann!</Title>
          <p>Welcome to my travel blog! I'm a passionate traveler, dedicated to exploring the world's most fascinating destinations and sharing my adventures with you. Through this blog, I aim to inspire, inform, and ignite your wanderlust.</p>
        </Section>
        <Section className='item2'>
          <h2>My Journey</h2>
          <p>My love for travel started at a young age. As I grew older, my journeys expanded beyond borders, taking me to breathtaking places. Each trip has been a new chapter, filled with unforgettable moments that I cherish.</p>
        </Section>
        
        <Section className='item3'>
          <h2>Join the Adventure</h2>
          <p>Travel is more than just seeing new places; it's about experiencing life in different ways, broadening your horizons, and creating memories that last a lifetime. Whether you're planning your next trip or simply dreaming of far-off lands, I invite you to join me on this exciting journey. Let's explore the world together, one adventure at a time.</p>
          <p>Feel free to reach out, share your own travel experiences, and ask questions. Together, we can create a vibrant and supportive community of travelers, eager to explore the wonders of our planet.</p>
        </Section>
      </Content>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  
  margin: auto;
  margin-top: 48px;
  margin-bottom: 96px;
  padding: 24px;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: auto auto auto auto auto;
  gap: 40px;
  padding-top: 0;
  
  font-family: 'Chivo', sans-serif;
  font-weight: 200;

  h2 {
    font-weight: 400;
    margin-top:0;
  }
  p{
    line-height: 120%;
  }
  .item1 {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }

  .item2 {
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
  }

  .item3 {
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
  }
 
`;

const Section = styled.div`
  padding: 0;
  li{
    margin-bottom: 12px;
  }
`;

const Image = styled.img`
  width: 100%;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
`;

const Title = styled.h1`
  margin-top: 0;
  font-family: 'Cinzel', serif;
  font-size: 40px;
  font-weight: normal;
  letter-spacing: 0.3rem;
`;
