import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const videos = [
    "/assets/videos/bikevid7.mp4",
];

const backgroundImages = [
    "/assets/rebike-imgs/rebike1.webp",
    "/assets/rebike-imgs/rebike2.webp",
    "/assets/rebike-imgs/rebike3.webp",
    "/assets/rebike-imgs/rebike4.webp",
    "/assets/rebike-imgs/rebikemain.webp"
];

const featuredPartItems = [
    products.find(p => p.id === 54), // Brown Seat Cover
    products.find(p => p.id === 2),  // 5CD Classic Wheel
    products.find(p => p.id === 10), // Akrapovic Exhaust
    products.find(p => p.id === 61), // Handlebar Mirrors
].filter(Boolean);

export function RoyalEnfield() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black min-h-screen relative overflow-x-hidden">
            {/* FIXED BACKGROUND GRID - ATTACHED TO BG, NO MOVE ON SCROLL */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 h-full w-full opacity-[1] brightness-50">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="relative aspect-video md:aspect-square overflow-hidden border border-white/5">
                            <img
                                src={backgroundImages[i % backgroundImages.length]}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                    ))}
                </div>
                {/* Global Vignette for better readability */}
                <div className="absolute inset-0 bg-radial-to-c from-transparent via-black/40 to-black" />
            </div>

            {/* SCROLLABLE CONTENT WRAPPER */}
            <div className="relative z-10 flex flex-col">
                <Header />

                <main>
                    {/* Hero Section */}
                    <section className="relative mt-20">
                        <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden shadow-2xl border border-white/5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentVideo}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="absolute inset-0"
                                >
                                    <video
                                        key={videos[currentVideo]}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="h-full w-full object-cover"
                                    >
                                        <source src={videos[currentVideo]} type="video/mp4" />
                                    </video>
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute inset-0 z-10 bg-black/10" />

                            <div className="container flex flex-col justify-center items-center mx-auto px-4 md:px-20 relative z-20 h-full pb-16 md:pb-24 text-center w-full ">
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wider"
                                >
                                    <div className="flex items-center justify-center gap-2 md:gap-8 w-full px-2 md:px-4">
                                        <div className="flex-1 flex flex-col gap-1 md:gap-2 items-end min-w-[20px] md:min-w-[150px] lg:min-w-[350px]">
                                            <div className="h-2 md:h-4 w-full bg-[#c10007] rounded-sm"></div>
                                            <div className="h-1 md:h-2 w-[80%] bg-[#c10007] rounded-sm"></div>
                                        </div>
                                        <div className="relative flex flex-col items-center justify-center">
                                            <img
                                                src="/assets/logo/Royal-Enfield-Font-500x375-removebg-preview.png"
                                                alt="Royal Enfield"
                                                className="h-16 md:h-40 lg:h-56 object-contain brightness-0 invert sepia saturate-100 hue-rotate-10 mb-0 w-[180px] md:w-[400px] max-w-full"
                                                style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))' }}
                                            />
                                            <p className="relative md:-mt-1 text-gold font-serif italic text-base md:text-2xl tracking-widest uppercase whitespace-nowrap z-10">Two wheels one Soul</p>
                                        </div>
                                        <div className="flex-1 flex flex-col gap-1 md:gap-2 items-start min-w-[20px] md:min-w-[150px] lg:min-w-[350px]">
                                            <div className="h-2 md:h-4 w-full bg-[#c10007] rounded-sm"></div>
                                            <div className="h-1 md:h-2 w-[80%] bg-[#c10007] rounded-sm"></div>
                                        </div>
                                    </div>
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1 }}
                                >
                                    <Link to="/collection" className="px-10 py-4 bg-[#c10007] text-white font-oswald font-bold text-sm hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-[0.2em] rounded-full cursor-pointer inline-block shadow-2xl shadow-red-900/20">
                                        View Collection
                                    </Link>
                                </motion.div>
                            </div>

                            <div className="absolute bottom-10 right-10 z-30 flex flex-col space-y-3">
                                {videos.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentVideo(index)}
                                        className={`w-1.5 transition-all duration-500 rounded-full cursor-pointer ${currentVideo === index ? 'h-8 bg-gold' : 'h-3 bg-white/20 hover:bg-white/40'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                    <div className="relative z-10 flex flex-col justify-center">

                        {/* Alternating Sections */}
                        {[
                            {
                                subtitle: "Way of Life",
                                title: "PRECISION ENGINEERED,",
                                highlight: "ROYAL ENFIELD GENUINE PARTS",
                                desc: "Discover the power of Royal Enfield engineering. We provide authentic parts designed to keep your machine performing at its absolute peak.",
                                items: ["Unmatched reliability and durability", "Optimized for peak engine performance", "Factory-certified quality standards"],
                                image: "/assets/logo/red-bullet.png",
                                transparent: false
                            },
                            {
                                subtitle: "Heritage",
                                title: "TIMELESS CLASSIC,",
                                highlight: "DESIGNED FOR THE ROAD",
                                desc: "Experience the legacy of a brand that has stood the test of time. Every curve and line is a tribute to motorcycling history.",
                                items: ["Classic aesthetics with modern reliability", "Hand-painted pinstripes on select models", "Iconic thump that defines the ride"],
                                image: "/assets/logo/blue-bullet.png",
                                transparent: true
                            },
                            {
                                subtitle: "Performance",
                                title: "UNMATCHED PERFORMANCE,",
                                highlight: "BUILT TO LAST",
                                desc: "Royal Enfield motorcycles are built to traverse the toughest terrains, from the Himalayas to city streets, with ease and grace.",
                                items: ["Torque-heavy engines for mountain roads", "Robust chassis for superior stability", "Advanced braking systems for safety"],
                                image: "/assets/enfield/Gemini_Generated_Image_hqfkmshqfkmshqfk.png",
                                transparent: false
                            },
                            {
                                subtitle: "Customization",
                                title: "GENUINE ACCESSORIES,",
                                highlight: "CUSTOMIZE YOUR RIDE",
                                desc: "Make your Royal Enfield truly yours with our wide range of genuine motorcycle accessories, designed for style and functionality.",
                                items: ["Touring seats for long-distance comfort", "Protective guards for engine and body", "Luggage solutions for every journey"],
                                image: "/assets/enfield/nobgbullet-350-removebg-preview.png", // Using engine image or fallback
                                transparent: true
                            },
                            {
                                subtitle: "Lifestyle",
                                title: "RIDING APPAREL,",
                                highlight: "GEAR UP FOR THE JOURNEY",
                                desc: "Ride in style and safety with our exclusive collection of Royal Enfield riding gear and apparel.",
                                items: ["CE-certified protective jackets", "Vintage-inspired helmets", "Durable riding gloves and boots"],
                                image: "/assets/enfield/nobggoan_classic-removebg.png",
                                transparent: false
                            }
                        ].map((section, index) => (
                            <div key={index} className={`section-wrapper ${section.transparent ? '' : 'bg-transparent! border-none'}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="flex-1 z-10 text-left"
                                >
                                    <span className={`font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase ${section.transparent ? 'text-gold' : 'text-white'}`}>{section.subtitle}</span>
                                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-oswald font-bold leading-tight mb-8 uppercase tracking-wide text-[#c10007]">
                                        {section.title} <br />
                                        <span className="text-white px-0">{section.highlight}</span>
                                    </h2>
                                    <div className="space-y-6 text-white/90">
                                        <p className="text-lg">{section.desc}</p>
                                        <ul className={`space-y-2 list-disc list-inside transition-colors ${section.transparent ? 'hover:text-gold' : 'hover:text-[#c10007]'}`}>
                                            {section.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        className={`w-full h-full rounded-[2rem] overflow-hidden border-4 ${section.transparent ? 'border-gold/20' : 'border-red-600/20 bg-black'}`}
                                    >
                                        <img src={section.image} alt={section.highlight} className="w-full h-full object-contain" />
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Brand Story Section */}
                    {/* <section className="py-24 px-6 md:px-12">
                        <div className="container mx-auto">
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="flex-1 space-y-8"
                                >
                                    <div className="space-y-4">
                                        <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] block uppercase">The Legacy</span>
                                        <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase leading-tight">
                                            SINCE 1901. <br />
                                            <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-white/70">PURE MOTORCYCLING.</span>
                                        </h2>
                                    </div>
                                    <div className="space-y-6 text-white/60 font-inter text-lg leading-relaxed max-w-xl">
                                        <p>The oldest motorcycle brand in continuous production, Royal Enfield has made bullets for over a century. From the battlefields of World War I to the highest motorable passes in the Himalayas.</p>
                                        <p>At Kazi Motors, we honor this 120-year legacy by providing components that maintain the classic soul of your machine while delivering performance that exceeds modern expectations.</p>
                                    </div>
                                    <div className="flex items-center gap-8 pt-4">
                                        <div className="text-center">
                                            <div className="text-3xl font-oswald font-bold text-gold">120+</div>
                                            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Years of History</div>
                                        </div>
                                        <div className="w-px h-12 bg-white/10" />
                                        <div className="text-center">
                                            <div className="text-3xl font-oswald font-bold text-gold">1901</div>
                                            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Est. Redditch</div>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="flex-1 relative"
                                >
                                    <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
                                    <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl skew-y-3 lg:skew-y-0 lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                                        <img src="/assets/reparts-imgs/royalengine.webp" alt="Royal Enfield Engine" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 brightness-75 hover:brightness-100" />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section> */}

                    {/* Featured Parts Collection */}
                    {/* <section className="py-24 px-6 md:px-12 bg-white/5 backdrop-blur-md border-y border-white/5">
                        <div className="container mx-auto">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                                <div className="space-y-4">
                                    <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] block uppercase">Curated Selection</span>
                                    <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase leading-tight">FEATURED <span className="text-gold">PARTS</span></h2>
                                </div>
                                <Link to="/collection" className="text-white/40 hover:text-gold transition-colors font-oswald text-sm uppercase tracking-widest pb-2 border-b border-white/10 hover:border-gold">View Entire Collection →</Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {featuredPartItems.map((item, index) => (
                                    <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group relative">
                                        <div className="aspect-square bg-black/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-gold/30 transition-all duration-500 relative">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                                <button onClick={() => handleAddToCart(item)} className="w-full bg-gold text-black font-oswald font-bold py-3 rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 transform active:scale-95 translate-y-4 group-hover:translate-y-0">Add to Cart</button>
                                            </div>
                                        </div>
                                        <div className="mt-6 space-y-2">
                                            <h3 className="text-white font-oswald text-lg uppercase tracking-tight group-hover:text-gold transition-colors">{item.title}</h3>
                                            <div className="flex justify-between items-center"><span className="text-white/40 text-xs uppercase tracking-widest">{item.category}</span><span className="text-gold font-bold">{item.price || "€149.00"}</span></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section> */}

                    {/* Why Choose Kazi Motors Section */}
                    {/* <section className="py-24 px-6 md:px-12">
                        <div className="container mx-auto">
                            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                                <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] block uppercase">Our Promise</span>
                                <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase leading-tight">WHY CHOOSE <span className="text-gold">KAZI MOTORS</span></h2>
                                <p className="text-white/40 text-lg">We combine a century of motorcycling heritage with modern engineering precision.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { title: "Genuine Spares", desc: "100% authentic Royal Enfield components to ensure your machine's soul remains untouched.", icon: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" },
                                    { title: "Expert Fitting", desc: "Our technicians are certified Royal Enfield specialists who understand the unique character of every model.", icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m0 0a2.978 2.978 0 01-3.34-3.34L15.25 4.63a1.5 1.5 0 00-2.02-2.02l-3.45 3.45a2.978 2.978 0 01-3.34 3.34L2.63 6.63a1.5 1.5 0 00-2.02 2.02l3.45 3.45a2.978 2.978 0 013.34 3.34l-3.45 3.45a1.5 1.5 0 002.02 2.02l3.45-3.45z" },
                                    { title: "Global Standards", desc: "Export quality finishes and performance upgrades that meet enthusiasts' demands across the globe.", icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.015 9.015 0 0 1 8.716 2.253M12 3a9.015 9.015 0 0 0-8.716 2.253m0 0A8.961 8.961 0 0 1 12 4.5c2.106 0 4.056.726 5.607 1.936M2.393 5.253a8.996 8.996 0 0 1 4.414-3.313m11.107 3.313a8.996 8.996 0 0 0-4.414-3.313m6.608 19.116a11.023 11.023 0 0 1-2.91 3.5m-3.931-1.341a9 9 0 1 1 3.931-1.341" }
                                ].map((feature, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-3xl bg-black/60 backdrop-blur-sm border border-white/5 hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-500 group">
                                        <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} /></svg></div>
                                        <h3 className="text-xl font-oswald font-bold text-white uppercase mb-4 tracking-tight">{feature.title}</h3>
                                        <p className="text-white/40 leading-relaxed font-inter">{feature.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section> */}
                </main>

                <Footer />
            </div>
        </div>
    );
}

