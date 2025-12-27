import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Showcase from "./pages/Showcase";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/videos" element={<div className="pt-24 text-center">Videos Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;