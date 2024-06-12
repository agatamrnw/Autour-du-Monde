import React from 'react';
import styled from 'styled-components';

const Bucket = () =>{

    return(
        <Container>
      <Content>
        <Image src='/assets/travel.jpg'/>
        <Section className='item1'>
          <Title>2024 Travel Bucket List</Title>
          <p>Discover the ultimate travel destinations to add to your 2024 bucket list! From the pristine beaches of the Maldives to the vibrant streets of Tokyo, this guide highlights the top must-visit places for the year ahead. Whether you're seeking adventure, relaxation, or cultural experiences, our curated list has something for every traveler. Start planning your dream trips now and make 2024 a year of unforgettable journeys.</p>
        </Section>
        <Section className='item2'>
          <ul>
            <li>
            <h2>Kyoto, Japan</h2>
            <p>Experience the timeless beauty of Kyoto, with its stunning temples, traditional tea houses, and vibrant cherry blossoms in the spring. Don't miss the historic Gion district and the serene Arashiyama Bamboo Grove.</p>
            </li>
            <li>
            <h2>Iceland</h2>
            <p>Explore the otherworldly landscapes of Iceland, from the mesmerizing Northern Lights to the geothermal wonders of the Blue Lagoon. Visit the Golden Circle, hike on glaciers, and witness powerful waterfalls like Gullfoss and Seljalandsfoss.</p>
            </li>
            <li>
            <h2>Santorini, Greece</h2>
            <p>Relax on the iconic island of Santorini, known for its whitewashed buildings, blue-domed churches, and breathtaking sunsets. Explore the charming towns of Oia and Fira, and savor delicious Greek cuisine..</p>
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
            
          </ul>
          
        </Section>
      </Content>
    </Container>
  );
};

export default Bucket;

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
    

