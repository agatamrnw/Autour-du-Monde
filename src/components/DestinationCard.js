import React from 'react';
import styled from 'styled-components';

const DestinationCard = ({ destination }) => {
  return (
    <CardContainer>
      <Content>
        <Title>{destination.name}</Title>
        <Date>{destination.date}</Date>
        <Image src={destination.image} />
        <Description>{destination.description}</Description>
      </Content>
    </CardContainer>
  );
};

export default DestinationCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const Date = styled.p`
  margin: 10px 0;
  color: #666;
`;

const Description = styled.p`
  color: #666;
`;
