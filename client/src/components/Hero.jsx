import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-dark flex flex-col md:flex-row">
            {/* LEFT VIDEO SECTION (50%) */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full border-b md:border-b-0 md:border-r border-gold/10 group overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out scale-105 group-hover:scale-110"
                >
                    <source src="/assets/videos/royal-enfield-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* RIGHT VIDEO SECTION (50%) */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full border-t md:border-t-0 md:border-l border-gold/10 group overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 ease-in-out scale-105 group-hover:scale-110"
                >
                    <source src="/assets/videos/royal-enfield-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* CENTRAL OVERLAY CONTENT */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-black/80 backdrop-blur-md p-8 md:p-12 border border-gold/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] max-w-4xl pointer-events-auto"
                >
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-oswald font-bold text-white tracking-widest leading-none mb-4"
                    >
                        ROYAL <span className="text-gold">LEGACY</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-xl text-silver font-light font-inter mb-8 tracking-wide"
                    >
                        Premium Parts | Custom Modifications | Expert Craftsmanship
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <a
                            href="https://wa.me/918855989211"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-8 py-3 bg-gold text-dark font-oswald font-bold text-lg tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                        >
                            <FaWhatsapp /> CONTACT US
                        </a>

                        <a
                            href="https://www.instagram.com/kazi_auto_parts/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-8 py-3 bg-transparent border border-white/20 text-white font-oswald font-bold text-lg tracking-wider hover:border-gold hover:text-gold transition-all duration-300"
                        >
                            <FaInstagram /> INSTAGRAM
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce pointer-events-none">
                <div className="w-1 h-16 bg-gradient-to-b from-gold to-transparent opacity-50"></div>
            </div>
        </div>
    );
};

export default Hero;
