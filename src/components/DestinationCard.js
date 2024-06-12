import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();
  const goToDestination = () => {
    const path ='/'+destination.id
    navigate(path); 
  };
  return (
    <CardContainer onClick={goToDestination}>
      <Content>
      <Image src={destination.image} />
      <Info>
      <Title>{destination.name}</Title>
        <Date>{destination.date}</Date>
        
        <Description>{destination.description}</Description>
      </Info>
        
      </Content>
    </CardContainer>
  );
};

export default DestinationCard;

const Info = styled.div`
display:flex;
flex-direction: column;
margin: 16px;
`;

const CardContainer = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  overflow: hidden;
  background-color: #ffffff;
  font-family:'Chivo';
  cursor: pointer;
  &:hover{
    box-shadow: 0 2px 4px rgba(255, 190, 152, 0.8);
  }
`;

const Image = styled.img`
  max-width: 320px;
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 300;
`;

const Date = styled.p`
  margin: 10px 0;
  color: #666;
`;

const Description = styled.p`
  color: #666;
`;
