import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Only the Real Deal",
        description: "We supply 100% genuine Royal Enfield spare parts sourced from trusted and authorized channels. No replicas, no compromises — just original parts that keep your bike performing exactly the way it was meant to.",
        image: "/assets/reparts-imgs/part6.webp"
    },
    {
        title: "Built Around Royal Enfield",
        description: "Royal Enfield isn’t just a category for us, it’s our core identity. Our entire business is structured around understanding Royal Enfield bikes, their distinct engineering, and the specific original parts they truly require.",
        image: "/assets/reparts-imgs/part5.webp"
    },
    {
        title: "Every Model, Every Mile",
        description: "From the legendary Bullet and Classic to Meteor, Himalayan, Interceptor, and Continental GT — we stock premium parts that fully support riders across all different models, terrains, and individual riding styles.",
        image: "/assets/reparts-imgs/part4.webp"
    },
    {
        title: "Performance First",
        description: "Style never compromises speed. We optimize every single aspect for a thrill-inducing driving experience. Our premium components ensure your machine operates at its absolute peak potential, delivering power and reliability on every ride.",
        image: "/assets/reparts-imgs/part7.webp"
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold font-oswald text-sm font-medium tracking-[0.5em] uppercase block mb-4"
                    >
                        The Kazi Advantage
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase tracking-wider"
                    >
                        WHY <span className="text-gold">CHOOSE US</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                            </div>

                            <h3 className="text-xl font-oswald font-bold text-white mb-3 uppercase tracking-wide group-hover:text-gold transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-white/50 hover:text-amber-500 font-inter text-sm 
                            group-hover:text-amber-700 leading-relaxed text-justify">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
