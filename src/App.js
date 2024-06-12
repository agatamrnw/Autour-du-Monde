import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DestinationsPage from './pages/DestinationsPage';
import BlogPage from './pages/BlogPage';
import SideMenu from './components/SideMenu';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Mallorca from './pages/Mallorca';
import Alpes from './pages/Alpes';
import destinations from './components/Destinations';
import Oslo from './pages/Oslo';
import Bucket from './pages/Bucket';
import Solo from './pages/Solo';
import Budget from './pages/Budget';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);




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
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/mallorca" element={<Mallorca />} />
        <Route path="/alpes" element={<Alpes />} />
        <Route path="/oslo" element={<Oslo />} />
        <Route path="/bucket-list" element={<Bucket />} />
        <Route path="/solo-trips" element={<Solo />} />
        <Route path="/budget-tips" element={<Budget />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
