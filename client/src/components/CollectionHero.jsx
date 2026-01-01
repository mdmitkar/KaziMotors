import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        image: "/assets/ws/WhatsApp Image 2025-12-27 at 5.38.50 PM.webp",
        title: "Racing Spirit",
        subtitle: "Unleash the power within. Premium gear for the track.",
        buttonText: "Shop Racing"
    },
    {
        image: "/assets/ws/WhatsApp Image 2025-12-27 at 5.38.51 PM.webp",
        title: "Urban Legend",
        subtitle: "Style meets substance. Dominate the city streets.",
        buttonText: "Explore Urban"
    },
    {
        image: "/assets/ws/WhatsApp Image 2025-12-27 at 5.38.52 PM.webp",
        title: "Touring Master",
        subtitle: "Adventure awaits. Comfort and durability for the long haul.",
        buttonText: "View Touring"
    },
];

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 1.1, // Slight zoom for depth
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
        scale: 0.9,
    }),
};

const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
};

export function CollectionHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(() => paginate(1), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[80vh] w-full overflow-hidden group/slider rounded-2xl mx-auto container mt-4">

            {/* Slider Images */}
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.5 }
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-400" />

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 pointer-events-none">
                <button
                    onClick={() => paginate(-1)}
                    className="z-20 text-white/50 hover:text-white hover:bg-black/40 p-3 rounded-full transition-all duration-300 pointer-events-auto backdrop-blur-sm border border-white/10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="z-20 text-white/50 hover:text-white hover:bg-black/40 p-3 rounded-full transition-all duration-300 pointer-events-auto backdrop-blur-sm border border-white/10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex flex-col items-center"
                    >
                        <motion.h1
                            variants={textVariants}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-white uppercase tracking-wider mb-4 drop-shadow-lg"
                        >
                            {slides[currentSlide].title.split(" ")[0]} <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-gold">{slides[currentSlide].title.split(" ").slice(1).join(" ")}</span>
                        </motion.h1>

                        <motion.p
                            variants={textVariants}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-200 text-lg md:text-xl font-roboto max-w-2xl mb-10 drop-shadow-md"
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>

                        <motion.button
                            variants={textVariants}
                            whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="bg-red-600 text-white font-oswald text-lg md:text-xl px-12 py-4 uppercase tracking-widest hover:bg-gold hover:text-black transition-all rounded-none skew-x-[-10deg] pointer-events-auto shadow-lg"
                        >
                            <span className="block skew-x-10">{slides[currentSlide].buttonText}</span>
                        </motion.button>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentSlide ? 1 : -1);
                            setCurrentSlide(index);
                        }}
                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                            ? "w-12 h-1.5 bg-red-600"
                            : "w-1.5 h-1.5 bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
