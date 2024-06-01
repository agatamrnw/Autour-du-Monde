import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogPost = ({ destinationId, title, description, image }) => {
  return (
    <PostContainer>
      <PostImage src={image} alt={title} />
      <PostContent>
        <PostTitle>
          <Link to={`/destinations/${destinationId}`}>{title}</Link>
        </PostTitle>
        <PostDescription>{description}</PostDescription>
        <ReadMore to={`/destinations/${destinationId}`}>Read more</ReadMore>
      </PostContent>
    </PostContainer>
  );
};

export default BlogPost;

const PostContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const PostImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 10px;
`;

const PostTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #007BFF;
    }
  }
`;

const PostDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const ReadMore = styled(Link)`
  font-size: 14px;
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
