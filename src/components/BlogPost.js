import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogPost = ({ post }) => {
  return (
    <PostContainer>
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
  margin: 20px;
  max-width: 300px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 640px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #ffffff;
  font-family: 'Chivo';
`;

const Image = styled.img`
  width: 80%;
  height: auto;
`;

const Content = styled.div`
  display: flex;
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const PostText = styled.p`
  color: #666;
  a{
    color: #C6C09C;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`;
