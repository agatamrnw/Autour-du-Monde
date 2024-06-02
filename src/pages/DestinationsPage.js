import React from 'react';
import styled from 'styled-components';
import DestinationCard from '../components/DestinationCard';


const destinationsData = [
  {
    name: 'Mallorca, Spain',
    date: '1.04.2024 - 14.04.2024',
    description: 'Sun-soaked shores, azure seas, vibrant markets, culture-rich streets, culinary delights.',
    image: '../images/mallorca.png'
  },
  {
    name: 'Alpes, Switzerland',
    date: '6.06.2023 - 12.06.2023',
    description: 'The majestic Alps welcomed me with open arms.',
    image: 'path_to_alpes_image'
  },
  // Add more destinations here
];

const DestinationsPage = ({ searchQuery }) => {
  const filteredDestinations = destinationsData.filter(destination =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageContainer>
      <DestinationsContainer>
        {filteredDestinations.map(destination => (
          <DestinationCard key={destination.name} destination={destination} />
        ))}
      </DestinationsContainer>
    </PageContainer>
  );
};

export default DestinationsPage;

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const DestinationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
