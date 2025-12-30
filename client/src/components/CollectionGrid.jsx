import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const collectionItems = [
    {
        id: 1,
        title: "Carbon Rear Hugger",
        category: "Body Parts",
        tag: "PRO SERIES",
        year: "2025",
        image: "/assets/BodyParts/BlackRearHugger.jpeg",
        description: "Premium black rear hugger for superior splash protection and sleek aesthetics.",
        price: "$149"
    },
    {
        id: 2,
        title: "Aerodynamic Winglets",
        category: "Body Parts",
        tag: "STREET ELITE",
        year: "2025",
        image: "/assets/BodyParts/BlueFrontWinglet.jpeg",
        description: "High-performance blue front winglets designed for increased downforce.",
        price: "$89"
    },
    {
        id: 3,
        title: "Race Seat Cowl",
        category: "Body Parts",
        tag: "LIMITED EDITION",
        year: "2025",
        image: "/assets/BodyParts/BlackSeatCowl.jpeg",
        description: "Convert your ride to a single-seat racer with this aggressive black cowl.",
        price: "$119"
    },
    {
        id: 4,
        title: "SC Project Exhaust",
        category: "Exhausts",
        tag: "PRO SERIES",
        year: "2025",
        image: "/assets/Exhausts/BlackSCProjectExhaust.jpeg",
        description: "Authentic SC Project exhaust with a deep, aggressive roar and weight reduction.",
        price: "$699"
    },
    {
        id: 5,
        title: "Akrapovic 6-Cut",
        category: "Exhausts",
        tag: "ULTRA LIGHT",
        year: "2025",
        image: "/assets/Exhausts/Akrapovic6CutExhausts.jpeg",
        description: "Precision-engineered titanium exhaust for peak power gains and signature sound.",
        price: "$899"
    },
    {
        id: 6,
        title: "Arrow Blue Tip",
        category: "Exhausts",
        tag: "SPECIAL EDITION",
        year: "2025",
        image: "/assets/Exhausts/BlueArrowExhaust.jpeg",
        description: "Custom blue-tipped Arrow exhaust for distinct style and thermal efficiency.",
        price: "$749"
    },
    {
        id: 7,
        title: "Thor LED Headlight",
        category: "Lights",
        tag: "STREET ELITE",
        year: "2025",
        image: "/assets/Lights/C174ThorHeadlight.jpeg",
        description: "Ultra-bright LED headlight with Thor's signature daytime running light pattern.",
        price: "$199"
    },
    {
        id: 8,
        title: "Fog Light Bar",
        category: "Lights",
        tag: "PRO SERIES",
        year: "2025",
        image: "/assets/Lights/4LensFogLightBar.jpeg",
        description: "4-lens high-intensity fog light bar for maximum visibility in all conditions.",
        price: "$129"
    },
    {
        id: 9,
        title: "Square LED Spot",
        category: "Lights",
        tag: "HERITAGE",
        year: "2025",
        image: "/assets/Lights/HjgW09SquareFogLight.jpeg",
        description: "Compact 50W square fog light delivering a focused, long-range beam.",
        price: "$79"
    },
    {
        id: 10,
        title: "3-Spoke Alloys",
        category: "Wheels",
        tag: "PRO SERIES",
        year: "2025",
        image: "/assets/Wheels/3SpokeDoubleDiscAlloyWheels.jpeg",
        description: "Heavy-duty 3-spoke alloy wheels with double disc mounting support.",
        price: "$450"
    },
    {
        id: 11,
        title: "Multi-Spoke Rims",
        category: "Wheels",
        tag: "STREET ELITE",
        year: "2025",
        image: "/assets/Wheels/MultiSpokeSingleDiscAlloyWheels.jpeg",
        description: "Lightweight multi-spoke alloy rims for improved handling and response.",
        price: "$399"
    },
    {
        id: 12,
        title: "Anti-Theft System",
        category: "Accessories",
        tag: "SPECIAL EDITION",
        year: "2025",
        image: "/assets/Accessories/AntiTheftAlarmSystem.jpeg",
        description: "Advanced motion-sensing alarm system with remote start and engine kill.",
        price: "$120"
    },
    {
        id: 13,
        title: "GPS Mobile Holder",
        category: "Accessories",
        tag: "STREET ELITE",
        year: "2025",
        image: "/assets/Accessories/BlackMobileHolder.jpeg",
        description: "Vibration-damped metallic mobile holder for secure navigation.",
        price: "$45"
    },
    {
        id: 14,
        title: "Gold Swingarm Spools",
        category: "Accessories",
        tag: "PRO SERIES",
        year: "2025",
        image: "/assets/Accessories/GoldSwingarmSpools.jpeg",
        description: "Anodized gold swingarm spools for easy paddock stand lifting.",
        price: "$25"
    },
    {
        id: 15,
        title: "Chrome Super Horns",
        category: "Accessories",
        tag: "HERITAGE",
        year: "2025",
        image: "/assets/Accessories/ChromeSuperHornPair.jpeg",
        description: "Dual chrome-plated high-decibel horns for a commanding road presence.",
        price: "$65"
    }
];


const categories = ["All", ...new Set(collectionItems.map(item => item.category))];

export function CollectionGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? collectionItems
        : collectionItems.filter(item => item.category === activeCategory);

    return (
        <section className="py-24 lg:pb-56 bg-black overflow-hidden font-oswald">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 border-b border-white/10 pb-8 gap-8">
                    <div>
                        <span className="text-gold text-sm tracking-[0.5em] uppercase block mb-2">Exclusive</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase">
                            2025 <span className="text-white/20">Collection</span>
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
                                    className={`relative group ${isMiddleColumn ? "lg:translate-y-32" : ""}`}
                                >
                                    <div className="relative aspect-square bg-[#0A0A0A] rounded-[2.5rem] border border-white/10 transition-all duration-700 group-hover:border-gold/50 group-hover:bg-[#111] overflow-hidden">

                                        {/* Base Card Content */}
                                        <div className="h-full w-full flex flex-col p-4">
                                            <div className="flex-1 flex items-center justify-center p-4">
                                                <motion.img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="max-h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>

                                            <div className="flex justify-between items-end px-4 pb-4 transition-opacity duration-300 group-hover:opacity-0">
                                                <div>
                                                    <h3 className="text-xl font-bold text-red-500 uppercase tracking-tight">{item.title}</h3>
                                                    <p className="text-gold text-[10px] uppercase tracking-widest">{item.category}</p>
                                                </div>
                                                <div className="text-gold font-bold text-lg">
                                                    {item.price}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Overlay (Unrolling Effect) */}
                                        <div className="absolute inset-0 z-20 pointer-events-none group-hover:pointer-events-auto transition-transform duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 bg-black flex flex-col items-center justify-center p-6 text-center">
                                            <div className="relative w-full h-1/2 flex items-center justify-center mb-4">
                                                <img src={item.image} alt={item.title} className="max-h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400">
                                                <h3 className="text-2xl font-bold text-white uppercase mb-2">{item.title}</h3>
                                                <p className="text-white/50 text-xs font-roboto italic mb-6 leading-relaxed px-4">"{item.description}"</p>
                                                <button className="bg-red-600 text-white text-sm px-10 py-3 rounded-xl uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-300 transform active:scale-95 shadow-xl cursor-pointer">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>

                                        {/* Bottom-Right Tab */}
                                        <div className="absolute bottom-0 right-0 z-10 transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0">
                                            <div className="bg-gold pt-4 pl-6 pr-8 pb-4 rounded-tl-[2rem] border-t border-l border-white/20">
                                                <span className="text-black text-sm md:text-base uppercase tracking-widest whitespace-nowrap font-bold">
                                                    {item.title} <span className="text-red-600 ml-2">{item.year}</span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Top-Left Label */}
                                        <div className="absolute top-8 left-8 flex items-center gap-2 z-10 group-hover:opacity-0 transition-opacity">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Background Glow */}
                                    <div className="absolute inset-0 bg-gold/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
