import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Level1 from './Levels/Level1';
import InstructionPage from './HomePage/InstructionPage';
import AboutUsPage from './HomePage/AboutUsPage.js';
import Home from './HomePage/Home';
import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';

function App() {
  return (
    <Router>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Level1" element={<Level1 />} />
            <Route path="/InstructionPage" element={<InstructionPage />} />
            <Route path="/AboutUsPage" element={<AboutUsPage />} />
            <Route path="/Level2" element={<Level2 />} />
            <Route path="/Level3" element={<Level3 />} />
          </Routes>
    </Router>
  );
}

export default App;