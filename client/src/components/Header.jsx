import React, { useState } from 'react';
import { FiHeart, FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { useCart } from '../context/CartContext';

export function Header() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = ['Home', 'Royal Enfield', 'Collection', 'Brands', 'About Us', 'Contact'];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#eabd56] py-3 px-6 md:px-12 flex justify-between items-center transition-all duration-300 shadow-sm">
            {/* Logo */}
            <div className="flex-1 z-50">
                <a href="/" className="inline-block no-underline">
                    <img
                        src="/assets/logo/final-kazi-logo.webp"
                        alt="Kazi Motors Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
                {navItems.map((item) => {
                    const isHome = item === 'Home';
                    const isRoyalEnfield = item === 'Royal Enfield';
                    const isCollection = item === 'Collection';
                    const isBrands = item === 'Brands';
                    const isContact = item === 'Contact';
                    const isAbout = item === 'About Us';

                    // Determine the href/to path
                    let linkPath = '/';
                    if (isCollection) linkPath = '/collection';
                    else if (isBrands) linkPath = '/brands';
                    else if (isContact) linkPath = '/contact';
                    else if (isAbout) linkPath = '/about';
                    else if (isRoyalEnfield) linkPath = '/royalenfield';
                    else if (!isHome) linkPath = `/#${item.toLowerCase().replace(' ', '-')}`;

                    const isActive = location.pathname === linkPath;

                    if (isBrands) {
                        return (
                            <div key={item} className="relative group">
                                <a
                                    href={linkPath}
                                    className={`text-sm font-inter font-semibold transition-colors relative flex items-center gap-1 no-underline pb- cursor-pointer ${isActive ? 'text-gold' : 'text-white hover:text-gold'}`}
                                >
                                    {item}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${isActive ? 'text-gold' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>

                                {/* Dropdown Menu */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <div className="bg-black border border-gold/20 rounded-xl py-3 px-2 min-w-[200px] shadow-2xl backdrop-blur-xl">
                                        {[
                                            { name: 'Royal Enfield', id: 'royal-enfield' },
                                            { name: 'Honda', id: 'honda' },
                                            { name: 'Yamaha', id: 'yamaha' },
                                            { name: 'Hero', id: 'hero-moto' },
                                            { name: 'Bajaj', id: 'bajaj' },
                                            { name: 'KTM', id: 'ktm' },
                                            { name: 'TVS', id: 'tvs' },
                                            { name: 'Suzuki', id: 'suzuki' },
                                        ].map((brand) => (
                                            <a
                                                key={brand.id}
                                                href={`/brands#${brand.id}`}
                                                className="block px-4 py-2 text-sm text-white/80 hover:text-gold hover:bg-gold/10 rounded-lg transition-all duration-200 no-underline"
                                            >
                                                {brand.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <a
                            key={item}
                            href={linkPath}
                            className={`text-sm font-inter font-semibold transition-colors relative group no-underline 
                                ${isRoyalEnfield
                                    ? 'fire-text font-bold text-base tracking-wider hover:opacity-80'
                                    : isActive ? 'text-gold' : 'text-white hover:text-gold'}`}
                        >
                            {item}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} ${isRoyalEnfield ? 'hidden' : ''}`} />
                        </a>
                    );
                })}
            </nav>

            {/* Icons & Mobile Toggle */}
            <div className="flex-1 flex justify-end items-center space-x-6 text-white z-50">
                <a href="/cart" className="hover:text-gold transition-colors p-1 relative flex items-center justify-center">
                    <FiShoppingBag size={22} />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-gold text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.2rem] text-center">
                            {totalItems}
                        </span>
                    )}
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden text-white hover:text-gold transition-colors focus:outline-none"
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-lg pt-24 px-6 flex flex-col items-center gap-8 lg:hidden z-40"
                    >
                        {navItems.map((item) => {
                            const isHome = item === 'Home';
                            const isRoyalEnfield = item === 'Royal Enfield';
                            const isCollection = item === 'Collection';
                            const isBrands = item === 'Brands';
                            const isContact = item === 'Contact';
                            const isAbout = item === 'About Us';

                            let linkPath = '/';
                            if (isCollection) linkPath = '/collection';
                            else if (isBrands) linkPath = '/brands';
                            else if (isContact) linkPath = '/contact';
                            else if (isAbout) linkPath = '/about';
                            else if (isRoyalEnfield) linkPath = '/royalenfield';
                            else if (!isHome) linkPath = `/#${item.toLowerCase().replace(' ', '-')}`;

                            const isActive = location.pathname === linkPath;

                            return (
                                <a
                                    key={item}
                                    href={linkPath}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-2xl font-oswald font-medium transition-colors ${isActive ? 'text-gold' : 'text-white hover:text-gold'}`}
                                >
                                    {item}
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}