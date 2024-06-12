import React from 'react';
import styled from 'styled-components';
import mallorca from '../images/mallorca.jpg';
import alpes from '../images/alpes.png';
import oslo from '../images/oslo.jpg';
import { useNavigate } from 'react-router-dom';


  
const HeroSection = () => {
  const navigate = useNavigate();
  const goToDestination = () => {
    navigate('/destinations'); 
  };
  return (
    <HeroContainer>
      <HeroContent>
        <Destination className='item1'>
          
          <DestinationName>Mallorca, Spain</DestinationName>
          <DestinationDate>1.04.2024 - 4.04.2024</DestinationDate>
          <DestinationImage src={mallorca}/>
          <DestinationDescription>
            Sun-soaked shores, azure seas, vibrant markets, culture-rich streets, <br/>culinary delights.<a href='/mallorca'> Read more..</a>
          </DestinationDescription>
        </Destination>
        <Destination className='item2'>
          
          <DestinationName>Alpes, Switzerland</DestinationName>
          <DestinationDate>6.06.2023 - 9.06.2023</DestinationDate>
          <DestinationImage src={alpes}/>
          <DestinationDescription>
            The majestic Alps welcomed me with open arms,<br/>towering peaks adorned with snow. Skiing down<br/> pristine slopes, cozy evenings in rustic chalets, <br/>and breathtaking vistas from mountain peaks painted <br/>unforgettable memories.<a href='/alpes'> Read more..</a>
          </DestinationDescription>
        </Destination>
        <Destination className='item3'>
          <DestinationName>Oslo, Norway</DestinationName>
          <DestinationDate>1.12.2023 - 4.12.2023</DestinationDate>
          <DestinationImage src={oslo}/>
          <DestinationDescription>
            In December, Oslo is a magical winter destination. I strolled through <br/>snowy streets adorned with twinkling lights, indulging in local treats <br/>like kanelboller and smørbrød. Iconic landmarks like the Oslo Opera House <br/>and Akershus Fortress added to the city's charm.<a href='/oslo'> Read more..</a>
          </DestinationDescription>
        </Destination>
        <Button onClick={goToDestination}>EXPLORE</Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

const DestinationImage = styled.img`
  width: 100%; 
  height: auto;
  
`;
const HeroContainer = styled.div`
  background: #ffffff;
  width:fit-content;
  margin:auto;
  display:flex;
  justify-content: center;
  margin-bottom: 80px;
  

`;

const HeroContent = styled.div`
  
  
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 40px;
  
`;

const Destination = styled.div`
  background: #fff;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  
  &.item1 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    width:480px;
   
  }

  &.item2 {
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
    width:280px;
    margin-top: 80px;
  }

  &.item3 {
    grid-column: 1 / span 1;
    grid-row: 2 / span 2;
    width:480px;
    
    
  }
  a{
    cursor: pointer;
    text-decoration: none;
    color: #C6C09C;
    &:hover{
      text-decoration: underline;
    }
  }

`;

const Button = styled.div`
cursor: pointer;
background: #000000;
max-width:380px;
color: #ffffff;
padding-top: 20px;
padding-bottom: 20px;
margin-bottom: 16px;

font-size: 20px;
font-family: 'Chivo';
text-align: center;
font-weight: 200;
grid-column: 2/span 1;
    grid-row: 3/span 1;
&:hover{
  background: #FFBE98;
  transition: 0.3s ease-out;
}
`;
const DestinationDate = styled.p`
  font-size: 14px;
  color: #888;
  font-family: 'Chivo';
  font-weight: 200;
`;

const DestinationName = styled.h2`
  font-size: 24px;
  margin: 4px 0;
  font-family: 'Chivo';
  font-weight: 200;
`;

const DestinationDescription = styled.p`
  font-size: 16px;
  color: #555;
  font-family: 'Open Sans';
  font-weight: 400;
`;
