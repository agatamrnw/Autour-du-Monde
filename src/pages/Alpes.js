import React from 'react';
import styled from 'styled-components';

const Alpes = () =>{

    return(
        <Container>
      <Content>
        <Image src='/assets/alpes-l.png'/>
        <Section className='item1'>
          <Title>Alpes, Switherland</Title>
          <p>Discover the magic of the Alps in June, starting in the charming town of Chamonix-Mont-Blanc at the base of Mont Blanc. Take a thrilling ride on the Aiguille du Midi cable car for breathtaking views, explore the Mer de Glace glacier, and hike to the picturesque Lac Blanc in the Aiguilles Rouges Nature Reserve.</p>
        </Section>
        <Section className='item2'>
          <h2>Day 1: Arrival in Chamonix-Mont-Blanc</h2>
          <h3>Arrival and First Impressions</h3>
          <p>My trip to the Alps began with an arrival in Chamonix-Mont-Blanc, a charming town nestled at the base of the majestic Mont Blanc, the highest peak in the Alps. The journey from Geneva to Chamonix was scenic, with stunning views of verdant valleys and towering peaks.</p>
          <h3>Exploring Chamonix</h3>
          <p>After checking into my cozy alpine lodge, I took a stroll around the town. Chamonix has a unique blend of rustic charm and modern amenities, with traditional chalets, chic boutiques, and an array of cafes and restaurants. The sight of snow-capped mountains surrounding the town was mesmerizing..</p>
          
        </Section>
        <Section className='item3'>
        <Image src='/assets/Flore-des-Alpes-Vallorcine.jpg'/>
        </Section>
        <Section className='item4'>
          <h2>Day 2: Mont Blanc Adventure</h2>
          <h3>Aiguille du Midi Cable Car</h3>
          <p>The next day started with a thrilling ride on the Aiguille du Midi cable car, which ascends to an altitude of 3,842 meters. The views during the ride were breathtaking, with jagged peaks and expansive glaciers. At the top, the panorama of Mont Blanc and the surrounding mountains was simply awe-inspiring.</p>
        </Section>
        <Section className='item5'>
          <h3>Step into the Void</h3>
          <p>One of the highlights was the "Step into the Void," a glass skywalk that juts out over a sheer drop. Standing on the glass floor with the valley far below was an exhilarating experience. The crisp mountain air and the sheer scale of the scenery made it unforgettable.</p>
        </Section>
        <Section className='item6'>
          <h3>Mer de Glace</h3>
          <p>In the afternoon, I took the Montenvers Railway to the Mer de Glace, the largest glacier in France. The train ride offered stunning views, and exploring the glacier itself was fascinating. I walked through the ice cave, marveling at the beautiful blue ice formations.</p>
        </Section>
        <Section className='item7'>
          <h2>Day 3: Departure and Reflections</h2>
          <h3>Last Morning in Chamonix</h3>
          <p>On my last morning, I took a leisurely walk along the Arve River, enjoying the peacefulness and the stunning views one last time. The fresh mountain air and the serene surroundings made it a perfect way to end the trip.</p>
          <h3>Departure</h3>
          <p>As I made my way back to Geneva for my flight home, I reflected on the incredible experiences and the natural beauty of the Alps. The trip had been a perfect blend of adventure, relaxation, and cultural immersion</p>
        </Section>

        <Section className='item8'>
          <h2>Reflections</h2>
          
          <p>My journey to the Alps was nothing short of magical. The combination of awe-inspiring landscapes, thrilling adventures, and warm hospitality made it an unforgettable experience. The memories of towering peaks, serene lakes, and charming alpine towns will stay with me forever. The trip not only rejuvenated my spirit but also deepened my appreciation for the natural world and the rich cultural heritage of the Alps.
</p>
        </Section>
      </Content>
    </Container>
  );
};

export default Alpes;

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
    grid-column: 2 / span 2;
    grid-row: 1 / span 1;
  }

  .item2 {
    grid-column: 2 / span 2;
    grid-row: 2 / span 1;
  }

  .item3 {
    grid-column: 1 / span 2;
    grid-row: 5 / span 2;
  }
  .item4 {
    grid-column: 1 / span 3;
    grid-row: 4 / span 1;
  }
  .item5 {
    grid-column: 3 / span 1;
    grid-row:5 / span 1;
  }
  .item6 {
    grid-column: 3 / span 1;
    grid-row: 6/ span 1;
  }
  .item7 {
    grid-column: 1 / span 3;
    grid-row:7 / span 1;
  }
  .item8 {
    grid-column: 1 / span 3;
    grid-row: 8/ span 1;
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
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
`;

const Title = styled.h1`
  margin-top: 0;
  font-family: 'Cinzel', serif;
  font-size: 40px;
  font-weight: normal;
  letter-spacing: 0.3rem;
`;
    

