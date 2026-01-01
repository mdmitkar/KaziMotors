import React from "react";
import { motion } from "framer-motion";

const brands = [
    { name: "Honda", logo: "/assets/brand-imgs/honda2.webp" },
    { name: "YAMAHA", logo: "/assets/brand-imgs/yamaha1.png" },
    { name: "Hero", logo: "/assets/brand-imgs/hero2.webp" },
    { name: "Bajaj", logo: "/assets/brand-imgs/bajaj2.webp" },
    { name: "KTM", logo: "/assets/brand-imgs/ktm2.webp" },
    { name: "tvs", logo: "/assets/brand-imgs/tvs2.webp" },
    { name: "Suzuki", logo: "/assets/brand-imgs/suzuki1.png" },
    { name: "royalenfield", logo: "/assets/brand-imgs/royalenfield1.png" },
];

export function Partner() {
    return (
        <section className="py-4 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-24 bg-black">
                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="order-2 lg:order-1 relative"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 border border-gold/20 rounded-2xl group-hover:border-gold/40 transition-colors duration-500" />
                        <div className="aspect-square md:aspect-[16/9] lg:aspect-[4/5] overflow-hidden rounded-2xl relative shadow-2xl">
                            <img
                                src="/assets/reparts-imgs/part6.webp"
                                alt="Multiple Motorcycle Brands"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-gold p-4 hidden md:block rounded-xl shadow-xl">
                            <p className="text-black font-oswald font-bold text-xs uppercase tracking-widest">Multi-Brand</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="order-1 lg:order-2"
                >
                    <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase font-inter">
                        Our Partners
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white leading-tight mb-3 uppercase tracking-wide">
                        YOUR CHOICE, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">OUR EXPERTISE</span>
                    </h2>
                    <p className="text-gradient">
                        At <span className="kazi-motors !text-[#d4af37]">Kazi Motors</span>, we believe in giving you the freedom to choose. Whether you're a fan of Royal Enfield's classic charm, Honda's reliability, or Yamaha's sporty edge, we've got you covered.
                    </p>
                    <p className="text-gradient">
                        From powerful engines and precision components to essential accessories, we ensure quality that enhances your ride. No matter your style or machine, our range is built to deliver confidence on the road and satisfaction in every mile you ride.
                    </p>
                    <p className="text-gradient">
                        Driven by passion and powered by expertise, Kazi Motors is your trusted destination for reliable motorcycle solutions. We blend craftsmanship with modern engineering to deliver products that not only perform exceptionally but also stand the test of time, ensuring every ride feels refined and dependable.
                    </p>

                </motion.div>
            </div>
            <div className="container mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-gold font-oswald text-sm tracking-[0.5em] uppercase block mb-4">
                        Our Network
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">
                        PARTNER <span className="text-gold">BRANDS</span>
                    </h2>
                </motion.div>

                {/* Marquee Container */}
                <div className="relative mt-8 w-full overflow-hidden">
                    {/* Gradient Masks */}
                    <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-black via-transparent to-black w-full h-full" />

                    <div className="flex whitespace-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                        <div className="animate-marquee flex gap-12 md:gap-16 items-center">
                            {[...Array(3)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {brands.map((brand, idx) => (
                                        <div key={`${i}-${idx}`} className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px]">
                                            <img
                                                src={brand.logo}
                                                alt={brand.name}
                                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`
                    .animate-marquee { animation: marquee 30s linear infinite; }
                    @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                `}</style>
            </div>
        </section>
    );
}
