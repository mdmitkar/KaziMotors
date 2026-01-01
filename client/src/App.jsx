import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { BrandsPage } from './pages/BrandsPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { AboutPage } from './pages/AboutPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Helmet>
        <title>Kazi Motors | Premium Mods</title>
        <meta name="description" content="Kazi Motors - Premium motorcycle mods, accessories, and customization for Royal Enfield, Honda, Yamaha, KTM, and more." />
        <meta property="og:title" content="Kazi Motors | Premium Mods" />
        <meta property="og:description" content="Kazi Motors - Premium motorcycle mods, accessories, and customization for Royal Enfield, Honda, Yamaha, KTM, and more." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Router>
        <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
