import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-dark min-h-screen">
            <Hero />

            {/* Introduction Section */}
            <section className="py-24 px-6 bg-gradient-to-b from-dark to-charcoal">
                <div className="container mx-auto text-center max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold font-oswald text-sm tracking-[0.3em] uppercase mb-4"
                    >
                        Since 1984
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl text-white font-oswald font-bold mb-8 uppercase"
                    >
                        Redefining <span className="text-gold">Royal Enfield</span> Aesthetics
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-silver text-lg font-light leading-relaxed font-inter"
                    >
                        At Kazi Motors, we don't just sell parts; we craft experiences. Our workshop is a sanctuary for machines, where standard bikes are transformed into roaring statements of style and power.
                    </motion.p>
                </div>
            </section>

            {/* Workshop/Service Teaser */}
            <section className="py-24 bg-[url('/assets/Exhausts/AkrapovicExhaustCollection.jpeg')] bg-cover bg-fixed relative">
                <div className="absolute inset-0 bg-black/80" />
                <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                    <h2 className="text-4xl text-white font-oswald uppercase mb-8">Visit Our Workshop</h2>
                    <p className="text-silver text-center max-w-2xl mb-10 font-inter">
                        We provide professional fitting and customization services. Bring your ride, and verify our quality in person.
                    </p>
                    <Link to="/showcase" className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300 font-oswald font-bold tracking-wider uppercase">
                        View Our Work
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
