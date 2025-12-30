import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Royal Enfield Engine", logo: "/assets/reparts-imgs/royalengine.png" },
  { name: "Akra Provic Collection", logo: "/assets/Exhausts/removedbackground/akraprovicexhaustcollection.png" },
  { name: "4Lens Fog Light", logo: "/assets/reparts-imgs/4LensFogLightBar.png" },
  { name: "Hero", logo: "/assets/reparts-imgs/part1.png" },
  { name: "Bajaj", logo: "/assets/reparts-imgs/part2.png" },
  { name: "KTM", logo: "/assets/reparts-imgs/part6.png" },
  { name: "Suzuki", logo: "/assets/reparts-imgs/part4.png" },
  { name: "TVS", logo: "/assets/reparts-imgs/part3.png" },
  { name: "Kawasaki", logo: "/assets/reparts-imgs/part1.png" },
  { name: "Harley", logo: "/assets/reparts-imgs/part2.png" },
  { name: "Ducati", logo: "/assets/reparts-imgs/part6.png" },
  { name: "Disc", logo: "/assets/reparts-imgs/disc.png" },
];

const displayBrands = [...brands, ...brands, ...brands];

export function Products() {
  const [currentIndex, setCurrentIndex] = useState(brands.length);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(5);
  const [isResetting, setIsResetting] = useState(false);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isResetting) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isResetting) return;
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle infinite loop reset
  const handleTransitionEnd = () => {
    if (currentIndex >= brands.length * 2) {
      setIsResetting(true);
      setCurrentIndex(brands.length);
    } else if (currentIndex < brands.length) {
      setIsResetting(true);
      setCurrentIndex(brands.length * 2 - 1);
    }
  };

  // Reset isResetting after instant jump
  useEffect(() => {
    if (isResetting) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsResetting(false);
        });
      });
    }
  }, [isResetting]);

  // Auto-play
  useEffect(() => {
    if (isPaused || isResetting) return;
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [isPaused, isResetting]);

  const centerOffset = Math.floor(itemsPerView / 2);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
      {/* Top Section - Image and Description */}


      {/* Bottom Section - Carousel */}
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <span className="text-gold font-oswald text-sm tracking-[0.5em] uppercase block mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold uppercase tracking-wider text-red-500 ">
            Explore{" "}<span className="text-gold">Our Premium</span>{" "}Products
          </h2>
          <div className="w-[500px] mt-2 bg-red-500 h-[5px] rounded"></div>
        </motion.div>
        <div className="relative group/carousel">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-30 pointer-events-none">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-black/80 border border-gold/30 flex items-center justify-center text-gold pointer-events-auto hover:bg-gold hover:text-black transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-black/80 border border-gold/30 flex items-center justify-center text-gold pointer-events-auto hover:bg-gold hover:text-black transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Carousel Track */}
          <div className="overflow-hidden py-10">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                duration: isResetting ? 0 : 0.1
              }}
              onAnimationComplete={handleTransitionEnd}
            >
              {displayBrands.map((brand, index) => {
                const isCenter = index === currentIndex + centerOffset;
                return (
                  <div key={`${brand.name}-${index}`} className="flex-shrink-0 px-4" style={{ width: `${100 / itemsPerView}%` }}>
                    <motion.div
                      animate={{
                        scale: isCenter ? 1.2 : 0.8,
                        opacity: isCenter ? 1 : 0.3,
                        filter: isCenter ? "grayscale(0%)" : "grayscale(100%)",
                        y: isCenter ? -10 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className={`relative group/item bg-gradient-to-br from-white/10 to-transparent border ${isCenter ? 'border-gold/50' : 'border-white/5'} rounded-2xl p-3 flex flex-col items-center justify-center aspect-square transition-all duration-300`}
                    >
                      {/* Glow Effect for Center Item */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-gold/10 blur-xl -z-10 rounded-2xl" />
                      )}

                      <img src={brand.logo} alt={brand.name} className="h-[100%] w-auto mb-4 object-contain" />
                      <h3 className={`font-oswald text-center font-medium text-xs uppercase tracking-[0.3em] ${isCenter ? 'text-red-500' : 'text-white'}`}>
                        {brand.name}
                      </h3>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Explore More Button */}
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-oswald text-lg tracking-widest px-10 py-3 rounded-full uppercase transition-colors shadow-lg shadow-red-900/20"
            >
              Explore More Products
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
