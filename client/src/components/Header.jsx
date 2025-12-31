import React from 'react';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';

export function Header() {


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
                {['Home', 'Collection', 'Brands', 'About'].map((item) => {
                    const isHome = item === 'Home';
                    const isCollection = item === 'Collection';
                    const isBrands = item === 'Brands';

                    // Determine the href/to path
                    let linkPath = '/';
                    if (isCollection) linkPath = '/collection';
                    else if (isBrands) linkPath = '/brands';
                    else if (!isHome) linkPath = `/#${item.toLowerCase().replace(' ', '-')}`;

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
                <button className="hover:text-gold transition-colors p-1 relative flex items-center justify-center">
                    <FiShoppingBag size={22} />
                    <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        0
                    </span>
                </button>
            </div>
        </header>
    );
}