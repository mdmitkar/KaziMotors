import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import products from '../data/products';
import { useCart } from '../context/CartContext';

// Filter out duplicates based on image path to ensure uniqueness
const uniqueProducts = products.filter((item, index, self) =>
    index === self.findIndex((t) => (
        t.image === item.image
    ))
);

// Sort products by category so they are grouped together in the "All" view
const collectionItems = uniqueProducts.sort((a, b) => a.category.localeCompare(b.category));


const categories = ["All", ...new Set(collectionItems.map(item => item.category))];

export function CollectionGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useCart();

    const filteredItems = activeCategory === "All"
        ? collectionItems
        : collectionItems.filter(item => item.category === activeCategory);

    const handleAddToCart = (product) => {
        addToCart(product);
        // Optional: You could show a toast notification here
        // alert(`${product.title} added to cart!`); 
    };

    return (
        <section className="py-24 lg:pb-56 bg-black overflow-hidden font-oswald">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 border-b border-white/10 pb-8 gap-8">
                    <div>
                        <span className="text-gold text-sm tracking-[0.5em] uppercase block mb-2">Exclusive</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-red-500 uppercase">
                            2025 <span className="text-gold">Collection</span>
                        </h2>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className='mb-12 flex justify-end'>
                    <div className="flex flex-wrap gap-3 p-2 border-b border-white/5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-gold border-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                                    : "border-white/10 text-white/40 hover:border-gold/50 hover:text-white cursor-pointer"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-start">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => {
                            const isMiddleColumn = index % 3 === 1;

                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: (index % 3) * 0.1,
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 100
                                    }}
                                    className={`relative group ${isMiddleColumn ? "lg:translate-y-32" : ""} cursor-pointer`}
                                    onClick={() => setSelectedProduct(item)}
                                >
                                    <div className="relative aspect-square bg-[#0A0A0A] rounded-[2.1rem] transition-all duration-700 
                                    lg:group-hover:border-3 lg:group-hover:border-gold/50 lg:group-hover:bg-[#111] overflow-hidden border-black border-3">

                                        {/* Base Card Content */}
                                        <div className="absolute inset-0 h-full w-full">
                                            <motion.img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-700 lg:group-hover:scale-110"
                                            />
                                            {/* Gradient Overlay for Text Legibility */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 lg:group-hover:opacity-0" />

                                            {/* Mobile Add to Cart Button - Top Right */}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleAddToCart(item);
                                                }}
                                                className="absolute top-4 right-4 z-30 lg:hidden bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-gold transition-colors active:scale-95 flex items-center justify-center border border-white/10"
                                                aria-label="Add to cart"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg>
                                            </button>

                                            <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-6 pt-6 pb-6 lg:pb-24 transition-opacity duration-300 lg:group-hover:opacity-0 z-20">
                                                <div className="max-w-[70%]">
                                                    <h3 className="text-xl font-bold text-red-500 uppercase tracking-tight leading-none mb-1">{item.title}</h3>
                                                    <p className="text-gold text-[10px] uppercase tracking-widest">{item.category}</p>
                                                </div>
                                                {item.price && (
                                                    <div className="text-gold font-bold text-lg">
                                                        {item.price}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Hover Overlay (Unrolling Effect) */}
                                        <div className="absolute inset-0 z-20 pointer-events-none lg:group-hover:pointer-events-auto transition-transform duration-700 ease-in-out transform translate-y-full lg:group-hover:translate-y-0 bg-black flex flex-col items-center justify-center p-6 text-center">
                                            <div className="relative w-full h-[65%] flex items-center justify-center mb-2">
                                                <img src={item.image} alt={item.title} className="max-h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 drop-shadow-[0_10px_20px_rgba(255,215,0,0.2)]" />
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400">
                                                <h3 className="text-2xl font-bold text-red-500 uppercase mb-2 leading-none">{item.title}</h3>
                                                <p className="text-white/50 text-xs font-roboto italic mb-6 leading-relaxed px-4">
                                                    "{item.description || `Premium ${item.color} finish from our ${item.category} collection.`}"
                                                </p>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleAddToCart(item);
                                                    }}
                                                    className="bg-red-600 text-white text-sm px-10 py-3 rounded-xl uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-300 transform active:scale-95 shadow-xl cursor-pointer"
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>

                                        {/* Bottom-Right Tab */}
                                        <div className="absolute bottom-0 right-0 z-10 transition-all duration-500 lg:group-hover:translate-y-full lg:group-hover:opacity-0 max-w-[90%] pointer-events-none">
                                            <div className="bg-gold pt-3 pl-12 pr-8 pb-4 rounded-tl-[2rem] border-t border-l border-white/20 pointer-events-auto">
                                                <h4 className="text-black text-xs md:text-sm uppercase tracking-widest font-bold leading-tight text-right block">
                                                    {item.title} <span className="text-red-600 ml-1 inline-block">{item.year || '2025'}</span>
                                                </h4>
                                            </div>
                                        </div>

                                        {/* Top-Left Label */}
                                        <div className="absolute top-0 left-0 flex items-center gap-2 z-10 lg:group-hover:opacity-0 transition-opacity bg-black p-2  ">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold ">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Background Glow */}
                                    <div className="absolute inset-0 bg-gold/5 blur-[100px] opacity-0 lg:group-hover:opacity-100 transition-all duration-700 -z-10" />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            {/* Product Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/95 backdrop-blur-md"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-4 md:p-12 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 md:top-0 md:right-0 text-white/50 hover:text-red-500 transition-colors z-50 p-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-2/3 h-1/2 md:h-full flex items-center justify-center relative group">
                                <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full" />
                                <motion.img
                                    src={selectedProduct.nobg || selectedProduct.image}
                                    alt={selectedProduct.title}
                                    className="relative max-w-full max-h-full object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.2)]"
                                    layoutId={`product-image-${selectedProduct.id}`}
                                />
                            </div>

                            {/* Info Section */}
                            <div className="w-full md:w-1/3 flex flex-col justify-center text-left space-y-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-4 py-1 rounded-full border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] bg-gold/5">
                                            {selectedProduct.category}
                                        </span>
                                        {selectedProduct.year && (
                                            <span className="text-white/40 text-xs font-mono">
                                                {selectedProduct.year}
                                            </span>
                                        )}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-none mb-2">
                                        {selectedProduct.title}
                                    </h2>
                                    <p className="text-red-500 font-bold text-2xl">
                                        {selectedProduct.price || "Contact for Price"}
                                    </p>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                                    {selectedProduct.description || `${selectedProduct.color} edition. Engineered for performance and style. Part of the exclusive 2025 Kazi Motors collection.`}
                                </p>

                                <div className="pt-6 border-t border-white/10">
                                    <button
                                        onClick={() => handleAddToCart(selectedProduct)}
                                        className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-xl uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
