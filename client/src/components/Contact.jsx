import React from "react";
import { motion } from "framer-motion";


const items = [
    {
        title: "PREMIUM SERVICE",
        description: "Hard to find? We’ll source it for you. Get access to exclusive and discontinued parts that aren’t easily available anywhere else.From rare components to special-fit parts, we help you get what others can’t — authentic, reliable, and original.",
        image: "/assets/bikefix-imgs/fix1.png",
        buttonText: "Order Now",
        delay: 0.1,
    },
    {
        title: "GENUINE PARTS",
        description: "Authentic parts and accessories for upgradation.Only 100% authentic parts and accessories, engineered for perfect fit, long life, and smooth performance. Upgrade your ride with confidence, not compromises.",
        image: "/assets/bikefix-imgs/fix2.png",
        buttonText: "SHOP PARTS",
        delay: 0.2,
    },
    {
        title: "VISIT SHOWROOM",
        description: "Experience our collection in person,Step inside and explore our range of genuine parts, accessories, and expert support — up close and personal.See, feel, and choose from our collection in-store. Because some things are best experienced, not scrolled.",
        image: "/assets/WhatsApp Image 2025-12-27 at 1.30.01 PM.jpeg",
        buttonText: "GET DIRECTIONS",
        delay: 0.3,
    },
];

export function Contact() {
    return (
        <section className="bg-black">
            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[450px]">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: item.delay }}
                        className="relative group h-[400px] md:h-full overflow-hidden border-r border-white/10 last:border-r-0"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:bg-black/70 transition-colors duration-500" />

                        {/* Content Container - Centered */}
                        <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-8 md:p-12 z-10">
                            {/* Top Content */}
                            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="font-oswald text-3xl md:text-4xl font-bold text-gold mb-4 uppercase tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="font-roboto text-gradient text-base md:text-lg opacity-90 max-w-[90%] md:max-w-[400px] mx-auto leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom Content (Button) */}
                            <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                <button className="bg-red-600 text-white font-oswald text-lg px-8 py-3 uppercase tracking-widest hover:bg-gold hover:text-black transition-colors duration-300 clip-path-slant cursor-pointer">
                                    {item.buttonText}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}