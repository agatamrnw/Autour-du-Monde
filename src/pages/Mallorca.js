import React from 'react';
import styled from 'styled-components';

const Mallorca = () =>{

    return(
        <Container>
      <Content>
        <Image src='/assets/mallorca.jpg'/>
        <Section className='item1'>
          <Title>Mallorca, Spain</Title>
          <p>My trip to Mallorca was an unforgettable adventure filled with stunning landscapes, vibrant culture, and delightful cuisine. Here's a detailed account of the journey:</p>
        </Section>
        <Section className='item2'>
          <h2>Day 1: Arrival and Palma Exploration</h2>
          <h3>Arrival in Palma</h3>
          <p>I arrived in Palma, the capital city of Mallorca, on a bright sunny morning. The flight was smooth, and the moment I stepped out of the airport, I was greeted by the warm Mediterranean breeze.</p>
        </Section>
        
        <Section className='item3'>
          <h3>Exploring Palma</h3>
          <p>My first stop was the famous La Seu Cathedral, a breathtaking Gothic structure that dominates the Palma skyline. The intricate details of the architecture were mesmerizing, and the view from the top was worth the climb, offering a panoramic vista of the city and the sea.</p>
          <p>After the cathedral, I wandered through the narrow streets of the Old Town, discovering charming shops, local cafes, and historic buildings. The lively atmosphere was infectious, and I couldn't resist trying some local pastries at a quaint bakery.</p>
        </Section>
        <Section className='item4'>
        <Image src='/assets/mallorca1.jpg'/>
        </Section>
        <Section className='item5'>
          <h3>Evening by the Sea</h3>
          <p>In the evening, I headed to the Paseo Marítimo, a scenic promenade along the waterfront. I enjoyed a leisurely walk, watching the boats in the marina and the sunset casting a golden hue over the water. Dinner was at a seaside restaurant where I savored a delicious paella, accompanied by a glass of local wine</p>
        </Section>
        <Section className='item6'>
          <h2>Day 2: Coastal Beauty and Adventure</h2>
          <h3>Road Trip to the North</h3>
          <p>The next day, I rented a car and set out to explore the northern part of the island. The drive itself was a highlight, with winding roads offering spectacular views of the coast and the Tramuntana Mountains.</p>
        </Section>
        <Section className='item7'>
        <Image src='/assets/Formentor.jpg'/>
        </Section>
        <Section className='item8'>
          <h3>Formentor Peninsula</h3>
          <p>My destination was Cap de Formentor, the northernmost point of Mallorca. The rugged cliffs and the turquoise waters below were awe-inspiring. I hiked to the lighthouse, where the view was even more breathtaking. It felt like standing on the edge of the world.</p>
          <h3>Beach Time</h3>
          <p>On the way back, I stopped at Playa de Muro, a beautiful beach with soft white sand and clear, shallow waters. It was the perfect place to relax and soak up the sun. I enjoyed a refreshing swim and a leisurely lunch at a beachside café.</p>
        </Section>
        <Section className='item9'>
          <h2>Day 3: Relaxation and Departure</h2>
          <h3>Cala Deia</h3>
          <p>On my last day, I visited Cala Deia, a small cove with crystal-clear waters surrounded by dramatic cliffs. It was a tranquil spot, perfect for a morning swim and some quiet reflection. The natural beauty of the place was simply stunning.</p>
          <h3>Final Moments in Palma</h3>
          <p>Back in Palma, I spent my remaining hours shopping for souvenirs and savoring one last meal of tapas at a local restaurant. As I made my way to the airport, I couldn't help but feel a bit nostalgic already. Mallorca had captured my heart with its beauty and charm.</p>
        </Section>
        <Section className='item10'>
        <Image src='/assets/deja.jpg'/>
        </Section>
        <Section className='item11'>
          <h2>Reflections</h2>
          <p>Mallorca is a gem in the Mediterranean, offering a perfect blend of natural beauty, cultural richness, and warm hospitality. Every moment of the trip was filled with wonder and joy, from exploring historic sites to relaxing on pristine beaches. I left with unforgettable memories and a deep appreciation for this enchanting island.</p>
        </Section>
      </Content>
    </Container>
  );
};

export default Mallorca;

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
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
  }

  .item3 {
    grid-column: 1 / span 3;
    grid-row: 3 / span 1;
  }
  .item4 {
    grid-column: 1 / span 3;
    grid-row: 4 / span 1;
  }
  .item5 {
    grid-column: 1 / span 3;
    grid-row:5 / span 1;
  }
  .item6 {
    grid-column: 1 / span 3;
    grid-row: 6 / span 1;
  }
  .item7 {
    grid-column: 1 / span 2;
    grid-row:7 / span 1;
  }
  .item8 {
    grid-column: 3 / span 1;
    grid-row:7 / span 1;
  }
  .item9 {
    grid-column: 1 / span 3;
    grid-row:8 / span 1;
  }
  .item10 {
    grid-column: 1 / span 3;
    grid-row:9 / span 1;
  }
  .item11 {
    grid-column: 1 / span 3;
    grid-row:10 / span 1;
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
    

