import React from 'react';
import styled from 'styled-components';

const BlogPage = () => {
  const blogPosts = [
    { id: 1, title: '10 Best Places to Visit in Paris', excerpt: 'Discover the top attractions in Paris.' },
    { id: 2, title: 'Exploring Tokyo', excerpt: 'A guide to the best places in Tokyo.' },
    // Add more blog posts as needed
  ];

  return (
    <BlogContainer>
      <h1>Blog</h1>
      {blogPosts.map(post => (
        <BlogPost key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </BlogPost>
      ))}
    </BlogContainer>
  );
};

export default BlogPage;

const BlogContainer = styled.div`
  padding: 20px;
`;

const BlogPost = styled.div`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;

  h2 {
    margin: 0 0 10px 0;
  }

  p {
    margin: 0;
  }
`;
