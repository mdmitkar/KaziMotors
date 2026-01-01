import React from 'react';
import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-black overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Side: Heading and Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="order-2 lg:order-1"
                >
                    <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">
                        Legacy of Excellence
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                        REDEFINING <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-white/70">AUTO ARTISTRY</span>
                    </h2>
                    <p className="font-inter text-base leading-relaxed max-w-lg mb-8 bg-linear-to-r from-white via-gold via-50% to-gold bg-clip-text text-transparent text-justify">
                        At <span className="text-gold font-bold">Kazi Motors</span>, we believe in giving you the freedom to choose. Whether you are a fan of Royal Enfield's classic charm, Honda's reliability, or Yamaha's sporty edge, we have got you covered with our curated selection for every rider.
                    </p>
                    <p className="font-inter text-base leading-relaxed max-w-lg mb-8 bg-linear-to-r from-white via-gold via-50% to-gold bg-clip-text text-transparent text-justify">
                        From powerful engines and precision components to essential accessories, we ensure quality that enhances your ride. No matter your style or machine, our range is built to deliver confidence on the road and satisfaction in every single mile you ride.
                    </p>
                    <p className="font-inter text-base leading-relaxed max-w-lg mb-8 bg-linear-to-r from-white via-gold via-50% to-gold bg-clip-text text-transparent text-justify">
                        Driven by passion and powered by expertise, Kazi Motors is your trusted destination for motorcycle solutions. We blend craftsmanship with modern engineering to deliver products that perform exceptionally and stand the test of time, ensuring every ride feels refined and dependable.
                    </p>
                    <div className="flex items-center space-x-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-oswald font-bold text-white">10+</span>
                            <span className="text-gold text-xs uppercase tracking-widest font-inter">Years Exp</span>
                        </div>
                        <div className="w-px h-12 bg-white/20" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-oswald font-bold text-white">500+</span>
                            <span className="text-gold text-xs uppercase tracking-widest font-inter">Happy Customers</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="order-1 lg:order-2 relative"
                >
                    <div className="relative group">
                        {/* Background Decorative Frame */}
                        <div className="absolute -inset-4 border border-gold/20 rounded-2xl group-hover:border-gold/40 transition-colors duration-500" />

                        {/* Image Div */}
                        <div className="aspect-4/5 md:aspect-video lg:aspect-4/5 overflow-hidden rounded-2xl relative shadow-2xl">
                            <img
                                src="/assets/bikefix-imgs/fix5.webp"
                                alt="Automotive Workshop"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Floating Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 bg-gold p-4 hidden md:block rounded-xl shadow-xl">
                            <p className="text-black font-oswald font-bold text-xs uppercase tracking-widest">Premium Quality</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}