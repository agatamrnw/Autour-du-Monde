import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DestinationsPage from './pages/DestinationsPage';
import BlogPage from './pages/BlogPage';
import SideMenu from './components/SideMenu';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);


  const destinations = [
    { id: 1, name: 'Mallorca, Spain' },
    { id: 2, name: 'Alpes, Switzerland' },
    { id: 3, name: 'Oslo, Norway'}
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.length > 0) {
      const results = destinations.filter(destination =>
        destination.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };
  const handleFocus = () => {
    setMenuVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setMenuVisible(false);
    }, 200);
  };
  return (
    <Router>
      <Header />
      <Navbar onSearch={handleSearch} onFocus={handleFocus} onBlur={handleBlur} />
      <SideMenu results={searchResults} visible={menuVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage searchQuery={searchQuery} />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
