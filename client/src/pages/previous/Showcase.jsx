import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "../components/ProductCard";
import products from "../../data/products";

const categories = ["All", "Wheels", "Exhausts", "Lights", "BodyParts", "Accessories"];

const Showcase = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-dark pt-24 pb-20">
            {/* WordPress-style Header Section */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-gold font-oswald text-4xl md:text-5xl uppercase tracking-widest mb-4"
                >
                    Our Masterpieces
                </motion.h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-silver font-inter max-w-3xl mx-auto leading-relaxed"
                >
                    Explore our exclusive collection of premium modifications. From high-performance exhausts to custom alloy wheels,
                    every piece is curated to elevate your Royal Enfield's presence on the road.
                    <br /><span className="text-gold italic">Note: This is a portfolio showcase. Contact us for availability and fitting.</span>
                </motion.p>
            </div>

            {/* Filter Tabs */}
            <div className="container mx-auto px-6 mb-12 overflow-x-auto">
                <div className="flex justify-center min-w-max space-x-4 pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-oswald tracking-wider transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-gold text-dark border-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                    : "bg-transparent text-silver border-white/10 hover:border-gold/50 hover:text-white"
                                }`}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="container mx-auto px-6">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                delay={product.id % 5} // Stagger effect
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center text-gray-500 mt-20 font-oswald text-xl">
                        No items found in this category yet.
                    </div>
                )}
            </div>

            {/* "WordPress" Style Footer Content Area */}
            <div className="container mx-auto px-6 mt-24 border-t border-white/5 pt-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-oswald text-white mb-6">WHY CHOOSE KAZI MOTORS?</h3>
                        <ul className="space-y-4 text-silver font-inter">
                            <li className="flex items-center gap-3">
                                <span className="text-gold text-xl">✓</span> Premium Quality Imports
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-gold text-xl">✓</span> Expert Installation Guidance
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-gold text-xl">✓</span> Exclusive Designs You Won't Find Elsewhere
                            </li>
                        </ul>
                    </div>
                    <div className="bg-charcoal p-8 rounded-lg border border-white/5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h4 className="text-xl font-oswald text-gold mb-4 relative z-10">VISIT OUR WORKSHOP</h4>
                        <p className="text-gray-400 mb-6 relative z-10">
                            Experience the quality firsthand. We provide full workshop services for fitting and customization.
                        </p>
                        <button className="text-white border-b border-gold pb-1 hover:text-gold transition-colors relative z-10">
                            GET DIRECTIONS &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
