import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DestinationPage = () => {
  const { destinationId } = useParams();

  // Example data. Replace with actual data fetching logic
  const destinations = {
    mallorca: {
      name: 'Mallorca, Spain',
      date: '1.04.2024 - 14.04.2024',
      description: 'Sun-soaked shores, azure seas, vibrant markets, culture-rich streets, culinary delights.',
      image: '/images/mallorca.jpg'
    },
    alpes: {
      name: 'Alpes, Switzerland',
      date: '6.06.2023 - 12.06.2023',
      description: 'The majestic Alps welcomed me with open arms, towering peaks adorned with snow. Skiing down pristine slopes, cozy evenings in rustic chalets, and breathtaking vistas from mountain peaks painted unforgettable memories.',
      image: '/images/alpes.jpg'
    },
    oslo: {
      name: 'Oslo, Norway',
      date: 'December',
      description: 'In December, Oslo is a magical winter destination. I strolled through snowy streets adorned with twinkling lights, indulging in local treats like kanelboller and smørbrød. Iconic landmarks like the Oslo Opera House and Akershus Fortress added to the city\'s charm.',
      image: '/images/oslo.jpg'
    }
  };

  const destination = destinations[destinationId];

  return (
    <PageContainer>
      <Title>{destination.name}</Title>
      <Date>{destination.date}</Date>
      <Image src={destination.image} alt={destination.name} />
      <Description>{destination.description}</Description>
    </PageContainer>
  );
};

export default DestinationPage;

const PageContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Date = styled.p`
  font-size: 18px;
  color: #888;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;
