import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Destination>
          
          <DestinationName>Mallorca, Spain</DestinationName>
          <DestinationDate>1.04.2024 - 14.04.2024</DestinationDate>
          <DestinationImage src='../images/mallorca.png'/>
          <DestinationDescription>
            Sun-soaked shores, azure seas, vibrant markets, culture-rich streets, culinary delights.
          </DestinationDescription>
        </Destination>
        <Destination>
          <DestinationDate>6.06.2023 - 12.06.2023</DestinationDate>
          <DestinationName>Alpes, Switzerland</DestinationName>
          <DestinationImage src='../images/alpes.png'/>
          <DestinationDescription>
            The majestic Alps welcomed me with open arms, towering peaks adorned with snow. Skiing down pristine slopes, cozy evenings in rustic chalets, and breathtaking vistas from mountain peaks painted unforgettable memories.
          </DestinationDescription>
        </Destination>
        <Destination>
          <DestinationName>Oslo, Norway</DestinationName>
          <DestinationImage src='../images/oslo.png'/>
          <DestinationDescription>
            In December, Oslo is a magical winter destination. I strolled through snowy streets adorned with twinkling lights, indulging in local treats like kanelboller and smørbrød. Iconic landmarks like the Oslo Opera House and Akershus Fortress added to the city's charm.
          </DestinationDescription>
        </Destination>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

const DestinationImage = styled.img`
  width: 100%;
`;
const HeroContainer = styled.div`
  background: #ffffff;
  padding: 20px;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Destination = styled.div`
  background: #fff;
  margin: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DestinationDate = styled.p`
  font-size: 14px;
  color: #888;
`;

const DestinationName = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const DestinationDescription = styled.p`
  font-size: 16px;
  color: #555;
`;
