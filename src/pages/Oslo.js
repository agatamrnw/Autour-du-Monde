import React from 'react';
import styled from 'styled-components';

const Oslo = () =>{

    return(
        <Container>
      <Content>
        <Image src='/assets/oslo.jpg'/>
        <Section className='item1'>
          <Title>Oslo, Norway</Title>
          <p>Experience the winter charm of Oslo in December with a three-day adventure. Start by exploring the festive Karl Johans Gate and historic Akershus Fortress. Visit Vigeland Sculpture Park and the Fram Museum, then enjoy panoramic views from Holmenkollen.</p>
        </Section>
        <Section className='item2'>
          <h2>Day 1: Arrival and Exploring Downtown Oslo</h2>
          <h3>Arrival in Oslo</h3>
          <p>I arrived in Oslo on a crisp December morning, greeted by a winter wonderland. The city was beautifully adorned with festive decorations, adding to the holiday charm.</p>
          <h3>Exploring Karl Johans Gate</h3>
          <p>After checking into my hotel, I headed straight to Karl Johans Gate, Oslo's main street. The avenue was alive with holiday spirit, featuring twinkling lights, bustling shops, and cozy cafes. I visited the Oslo Cathedral and strolled past the Royal Palace, enjoying the wintry atmosphere.</p>
          <h3>Akershus Fortress</h3>
          <p>In the afternoon, I walked to Akershus Fortress, a medieval castle with stunning views of the Oslo Fjord. The fortress, covered in a blanket of snow, looked magical. I explored the historical buildings and learned about Norway’s rich past.</p>
          <h3>Evening at Aker Brygge</h3>
          <p>As the evening approached, I went to Aker Brygge, a lively waterfront area. The beautifully lit promenade was perfect for a relaxing walk. I dined at a waterfront restaurant, savoring a delicious meal of traditional Norwegian salmon.</p>
          
        </Section>
        <Section className='item3'>
        <Image src='/assets/fram.jpg'/>
        </Section>
        <Section className='item4'>
          <h2>Day 2: Museums and Winter Activities</h2>
          <h3>Vigeland Sculpture Park</h3>
          <p>The next morning, I visited Vigeland Sculpture Park, even more enchanting with snow-covered sculptures. The unique artwork and serene surroundings made for a peaceful start to the day.</p>
        </Section>
        <Section className='item5'>
          <h3>Museum Visit</h3>
          <p>I spent the afternoon at the Fram Museum, dedicated to Norwegian polar exploration. The exhibits, including the original Fram ship, were fascinating, providing deep insights into Norway’s adventurous spirit.</p>
        </Section>
        <Section className='item6'>
          <h3>Dinner and Relaxation</h3>
          <p>Back in the city, I enjoyed a warm, hearty meal at a traditional Norwegian restaurant. The ambiance was cozy, with fireplaces and rustic decor, providing the perfect end to a day full of exploration.</p>
        </Section>
        <Section className='item7'>
          <h2>Day 3: Nature and Cultural Immersion</h2>
          <h3>Oslo Fjord Cruise</h3>
          <p>On my final day, I embarked on a winter fjord cruise. Despite the cold, the experience was magical, with scenic views of the fjord’s icy waters and snowy landscapes. The tranquil atmosphere and crisp air were invigorating.</p>
          <h3>Christmas Market Visit</h3>
          <p>In the afternoon, I explored the Christmas market at Spikersuppa. The market was brimming with festive cheer, offering artisanal crafts, holiday treats, and warm drinks. I enjoyed wandering through the stalls, sipping on gløgg (Norwegian mulled wine), and soaking in the festive atmosphere.</p>
          <h3>Farewell Dinner</h3>
          <p>For my last evening, I chose a restaurant renowned for its Nordic cuisine. The meal was a delightful blend of traditional and modern flavors, featuring locally sourced ingredients. It was a perfect culinary finale to my Oslo adventure.</p>
        </Section>

        <Section className='item8'>
          <h2>Reflections</h2>
          
          <p>My three-day trip to Oslo in December was a perfect blend of cultural immersion, winter activities, and festive cheer. From exploring historical sites and world-class museums to enjoying the serene beauty of the Oslo Fjord and the lively Christmas market, every moment was memorable. The city's winter charm and warm hospitality made the experience truly special, leaving me with lasting memories of a magical winter getaway.

</p>
        </Section>
      </Content>
    </Container>
  );
};

export default Oslo;

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
    

