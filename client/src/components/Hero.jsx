import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-dark">
            {/* Background Graphic/Placeholder for Video */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-black/50" />
                {/* Placeholder for video - using a pattern or gradient for now */}
                <div className="h-full w-full bg-[url('/assets/Wheels/5CDClassicSingleDiscWheelFull.jpeg')] bg-cover bg-center animate-pulse-slow scale-110" />
            </div>

            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-oswald font-bold text-white tracking-widest leading-none drop-shadow-lg"
                >
                    CRAFT YOUR <span className="text-gold">LEGACY</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-6 text-xl md:text-2xl text-silver font-light max-w-2xl font-inter"
                >
                    Premium Modifications & Accessories for Royal Enfield Enthusiasts.
                </motion.p>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5, type: "spring" }}
                    className="mt-10 flex gap-6"
                >
                    <Link
                        to="/showcase"
                        className="px-8 py-3 bg-gold text-dark font-oswald font-bold text-lg tracking-wider hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                        EXPLORE MODS
                    </Link>
                    <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-3 border border-silver text-silver font-oswald font-bold text-lg tracking-wider hover:border-gold hover:text-gold transition-colors duration-300"
                    >
                        CONTACT US
                    </a>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
                <div className="text-gold/50 text-sm font-inter tracking-[0.5em]">SCROLL</div>
            </div>
        </div>
    );
};

export default Hero;
