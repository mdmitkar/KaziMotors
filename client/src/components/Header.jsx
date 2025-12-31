import React from 'react';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { useCart } from '../context/CartContext';

export function Header() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-[#eabd56] py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 shadow-sm">
            {/* Logo */}
            <div className="flex-1">
                <a href="/" className="inline-block no-underline">
                    <img
                        src="/assets/logo/final-kazi-logo.png"
                        alt="Kazi Motors Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </a>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
                {['Home', 'Collection', 'Brands', 'Contact'].map((item) => {
                    const isHome = item === 'Home';
                    const isCollection = item === 'Collection';
                    const isBrands = item === 'Brands';
                    const isContact = item === 'Contact';

                    // Determine the href/to path
                    let linkPath = '/';
                    if (isCollection) linkPath = '/collection';
                    else if (isBrands) linkPath = '/brands';
                    else if (isContact) linkPath = '/contact';
                    else if (!isHome) linkPath = `/#${item.toLowerCase().replace(' ', '-')}`;

                    if (isBrands) {
                        return (
                            <div key={item} className="relative group">
                                <a
                                    href={linkPath}
                                    className="text-sm font-inter font-semibold text-white hover:text-gold transition-colors relative flex items-center gap-1 no-underline pb- cursor-pointer"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
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
                                            { name: 'Hero', id: 'hero' },
                                            { name: 'Bajaj', id: 'bajaj' },
                                            { name: 'KTM', id: 'ktm' },
                                            { name: 'TVS', id: 'tvs' },
                                            { name: 'Kawasaki', id: 'kawasaki' },
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
                            className="text-sm font-inter font-semibold text-white hover:text-gold transition-colors relative group no-underline"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                        </a>
                    );
                })}
            </nav>

            {/* Icons & Search */}
            <div className="flex-1 flex justify-end items-center space-x-6 text-white">
                {/* Search Box */}


                <button className="hover:text-gold transition-colors p-1 relative flex items-center justify-center">
                    <FiHeart size={22} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-gold rounded-full" />
                </button>
                <a href="/cart" className="hover:text-gold transition-colors p-1 relative flex items-center justify-center">
                    <FiShoppingBag size={22} />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-gold text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[1.2rem] text-center">
                            {totalItems}
                        </span>
                    )}
                </a>
            </div>
        </header>
    );
}