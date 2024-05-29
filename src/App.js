import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import DestinationPage from './pages/DestinationPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations/:destinationId' element={<DestinationPage />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
