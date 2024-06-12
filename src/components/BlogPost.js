import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BlogPost = ({ post }) => {

    const navigate = useNavigate();
    const goToPost = () => {
      const path ='/'+post.id
      navigate(path); 
    };
  return (
    <PostContainer onClick={goToPost}>
      <Content>
      <Image src={post.image} />
      <Info>
      <Title>{post.name}</Title>
        <PostText>{post.text}<a>Read More</a></PostText>
      </Info>  
      </Content>
    </PostContainer>
  );
};

export default BlogPost;

const Info = styled.div`
display:flex;
flex-direction: column;
margin: 16px;
`;

const PostContainer = styled.div`
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



const PostText = styled.p`
  color: #666;
`;
