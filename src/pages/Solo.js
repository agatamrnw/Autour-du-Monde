import React from 'react';
import styled from 'styled-components';

const Solo = () =>{

    return(
        <Container>
      <Content>
        <Image src='/assets/solo.jpg'/>
        <Section className='item1'>
          <Title>Solo Trip Destinations</Title>
          <p>Embark on an unforgettable solo adventure with our guide to the best destinations for solo travelers in 2024. From the bustling streets of Bangkok to the serene landscapes of New Zealand, we've compiled a list of places that offer safety, excitement, and opportunities for self-discovery. Whether you're a seasoned solo traveler or taking your first independent trip, these destinations promise enriching experiences and the freedom to explore at your own pace.</p>
        </Section>
        <Section className='item2'>
          <ul>
            <li>
            <h2>Kyoto, Japan</h2>
            <p>Kyoto is perfect for solo travelers seeking a serene and culturally rich experience. With its tranquil temples, peaceful gardens, and traditional tea houses, you can enjoy moments of reflection and exploration. The city is incredibly safe, and public transportation is efficient and easy to navigate.</p>
            </li>
            <li>
            <h2>Reykjavik, Iceland</h2>
            <p>Iceland's capital, Reykjavik, is a solo traveler's dream, offering stunning natural landscapes and a vibrant cultural scene. Enjoy the city's museums, galleries, and cafes before venturing out to see the Northern Lights, geothermal hot springs, and dramatic waterfalls. Iceland is known for its low crime rate, making it an excellent choice for solo adventurers.</p>
            </li>
            <li>
            <h2>Barcelona, Spain</h2>
            <p>Barcelona is an exciting destination for solo travelers, with its unique architecture, bustling markets, and vibrant nightlife. Explore Gaudí's masterpieces, wander through the Gothic Quarter, and relax on the beaches. The city's lively atmosphere and welcoming locals make it easy to meet new people and enjoy your solo adventure.</p>
            </li>
            <li>
            <h2>Istanbul, Turkey</h2>
            <p>Explore the rich history and vibrant culture of Istanbul. Visit the Hagia Sophia, Blue Mosque, and Topkapi Palace. Wander through the Grand Bazaar and enjoy delicious Turkish cuisine.</p>
            </li>
            <li>
            <h2>Paris, France</h2>
            <p>Rediscover the romance and charm of Paris. Visit iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Stroll along the Seine River and enjoy French pastries in charming cafes.</p>
            </li>
            <li>
            <h2>Edinburgh, Scotland</h2>
            <p>Explore the historic city of Edinburgh. Visit the iconic Edinburgh Castle, walk along the Royal Mile, and hike up Arthur's Seat for panoramic views of the city.</p>
            </li>
            <li>
            <h2>Amsterdam, Netherlands</h2>
            <p>Amsterdam is renowned for its friendly locals, picturesque canals, and rich cultural heritage. As a solo traveler, you can explore the city's world-class museums, enjoy a leisurely bike ride, and relax in cozy cafes. The city's compact size and excellent public transportation make it easy to get around on your own.</p>
            </li>
          </ul>
          
        </Section>
      </Content>
    </Container>
  );
};

export default Solo;

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

  h2, h3 {
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
  grid-row: 1 / span 1;
`;

const Title = styled.h1`
  margin-top: 0;
  font-family: 'Cinzel', serif;
  font-size: 40px;
  font-weight: normal;
  letter-spacing: 0.3rem;
`;
    

