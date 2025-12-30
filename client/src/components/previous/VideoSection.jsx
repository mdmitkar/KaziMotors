import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
    return (
        <div className="py-24 bg-charcoal relative overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl text-white font-oswald uppercase tracking-widest mb-12"
                >
                    Cinematic <span className="text-gold">Experience</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Placeholder Video Cards */}
                    {[1, 2].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: item * 0.2 }}
                            className="aspect-video bg-black/50 border border-white/5 rounded-lg flex items-center justify-center relative group cursor-pointer hover:border-gold/30 transition-colors"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-gold border-b-[10px] border-b-transparent ml-1" />
                                </div>
                            </div>
                            <p className="absolute bottom-4 text-silver font-oswald tracking-wider">COMING SOON</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
