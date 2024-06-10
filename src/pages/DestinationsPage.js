import React from 'react';
import styled from 'styled-components';
import DestinationCard from '../components/DestinationCard';
import destinations from '../components/Destinations';


const DestinationsPage = ({ searchQuery }) => {
  const filteredDestinations = destinations.filter(destination =>
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
width: 100%;
  background-color: #ffffff;
  margin: auto;
  margin-bottom: 96px;
  margin-top: 48px;
`;

const DestinationsContainer = styled.div`
   display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;;
  align-items: center;
  
`;
