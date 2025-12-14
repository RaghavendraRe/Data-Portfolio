import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

const App: React.FC = () => {
  return (
    <Router>
      <CustomCursor />
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
