import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DestinationPage from './pages/DestinationPage';
import BlogPage from './pages/BlogPage';
import SearchResults from './components/SearchResults';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const data = [
    { type: 'destination', name: 'Paris', description: 'The city of light.' },
    { type: 'destination', name: 'Tokyo', description: 'A bustling metropolis.' },
    { type: 'blog', name: '10 Best Places to Visit in Paris', description: 'Discover the top attractions in Paris.' },
    { type: 'blog', name: 'Exploring Tokyo', description: 'A guide to the best places in Tokyo.' },
    // Add more data as needed
  ];

  const handleSearch = (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const results = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <Router>
      <Header />
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations/:destinationId' element={<DestinationPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/search' element={<SearchResults results={searchResults} />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
