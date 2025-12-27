import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const ProductCard = ({ image, title, category, delay }) => {
    const whatsappMessage = encodeURIComponent(`Hi Kazi Motors, I am interested in buying the ${title} (${category}). Please share details.`);
    const whatsappUrl = `https://wa.me/918855989211?text=${whatsappMessage}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group relative bg-charcoal overflow-hidden border border-white/5 hover:border-gold/30 transition-colors duration-300 block cursor-pointer text-left"
        >
            {/* Image Container */}
            <div className="aspect-square overflow-hidden bg-black/50 relative">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                />

                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/20">
                    <div className="bg-gold text-dark p-3 rounded-full shadow-lg transform scale-0 group-hover:scale-110 transition-transform duration-300 delay-100">
                        <FaWhatsapp className="text-2xl" />
                    </div>
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-gold text-xs font-oswald tracking-widest uppercase mb-1">{category}</p>
                <h3 className="text-white font-inter font-semibold text-lg leading-tight truncate">{title}</h3>
                <p className="text-gray-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to Enquire on WhatsApp</p>
            </div>
        </motion.a>
    );
};

export default ProductCard;
