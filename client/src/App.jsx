import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import {BrandsPage} from './pages/BrandsPage';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/brands" element={<BrandsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
