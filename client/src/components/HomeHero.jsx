import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
    "/assets/videos/bikevid1.mp4",
    "/assets/videos/bikevid6.mp4",
    "/assets/videos/bikevid3.mp4"
];

export function HomeHero() {
    const [currentVideo, setCurrentVideo] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative px-6 md:px-12 py-6 bg-black">
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden rounded-4xl shadow-2xl border border-white/5">
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

                {/* Sophisticated Dark Gradient Overlay - Made Lighter */}
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 z-10 bg-black/10" />

                <div className="container mx-auto px-10 md:px-20 relative z-20 h-full flex flex-col justify-end pb-16 md:pb-24">
                    <div className="max-w-2xl">



                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center space-x-3 mb-6"
                        >
                            <div className="w-10 h-px bg-gold" />
                            <span className="text-gold font-oswald text-xs md:text-sm font-medium tracking-[0.6em] uppercase">
                                Est. 2015
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide"
                        >
                            CRAFTING THE <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-white/80">ULTIMATE DRIVE</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                            className="flex flex-wrap gap-6"
                        >
                            <Link to="/collection" className="px-8 py-3 bg-gold text-black font-oswald font-bold text-xs hover:bg-white hover:text-white transition-all duration-500 uppercase tracking-[0.2em] rounded-full cursor-pointer inline-block">
                                View Collection
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Elegant Slider Dots */}
                <div className="absolute bottom-10 right-10 z-30 flex flex-col space-y-3">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentVideo(index)}
                            className={`w-1.5 transition-all duration-500 rounded-full cursor-pointer ${currentVideo === index ? 'h-8 bg-gold' : 'h-3 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}