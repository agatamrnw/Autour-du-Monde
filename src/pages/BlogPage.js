import React from 'react';
import styled from 'styled-components';
import BlogPost from '../components/BlogPost';
import posts from '../components/BlogPosts';

const BlogPage = () => {
  

  return (
    <PageContainer>
      <PostsContainer>
        {posts.map(post => (
          <BlogPost key={post.name} post={post} />
        ))}
      </PostsContainer>
    </PageContainer>
  );
};

export default BlogPage;

const PageContainer = styled.div`
  width:100%;
  background-color: #ffffff;
  margin-bottom: 96px;
  margin-top: 48px;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;;
  align-items: center;
`;



