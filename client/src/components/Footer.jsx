import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

export function Footer() {
    const footerLinks = {
        explore: [
            { name: "Collection", href: "/collection" },
            { name: "Our Brands", href: "/#brands" },
            { name: "About Us", href: "/#about" },
            { name: "Contact", href: "/#contact" }
        ],
        policies: [
            { name: "Shipping Policy", href: "#" },
            { name: "Return Policy", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "FAQ", href: "#" }
        ]
    };

    return (
        <footer className="bg-black text-white pt-20 pb-10 px-6 md:px-12 overflow-hidden border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Branding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-14 h-14 overflow-hidden">
                                <img
                                    src="/assets/logo/final-kazi-logo.png"
                                    alt="Kazi Motors Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-oswald font-bold tracking-tight uppercase leading-none text-white">
                                    Kazi <span className="text-gold">Motors</span>
                                </h3>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/60">
                                    Premium Auto Parts
                                </p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-white/60 font-medium font-roboto">
                            Elevating your ride with premium parts and expert craftsmanship. From rare components to performance upgrades, we fuel your passion for the road.
                        </p>

                    </motion.div>

                    {/* Column 2: Explore */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h4 className="text-lg font-oswald font-bold text-gold border-b border-gold/50 pb-2 inline-block uppercase tracking-wider">
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.explore.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors flex items-center gap-2 group cursor-pointer font-roboto">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold scale-0 group-hover:scale-100 transition-transform" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Support */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h4 className="text-lg font-oswald font-bold text-gold border-b border-gold/50 pb-2 inline-block uppercase tracking-wider">
                            Support & Legal
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.policies.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-white/70 hover:text-gold transition-colors flex items-center gap-2 group cursor-pointer font-roboto">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4 mt-6">
                            {[
                                { name: "Instagram", icon: <FaInstagram size={18} /> },
                                { name: "Facebook", icon: <FaFacebookF size={18} /> },
                                { name: "Youtube", icon: <FaYoutube size={18} /> },
                                { name: "Twitter", icon: <FaTwitter size={18} /> }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-black transition-all duration-300 group cursor-pointer text-white/60 shadow-inner"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Column 4: Contact Us */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h4 className="text-lg font-oswald font-bold text-gold border-b border-gold/50 pb-2 inline-block uppercase tracking-wider">
                            Contact Us
                        </h4>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="mt-1 text-gold">
                                    <FiMapPin size={18} />
                                </div>
                                <p className="text-sm text-white/70 font-roboto leading-relaxed">
                                    123  near Koter gate , Bhiwandi City, <br />
                                    MC 45678, India
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="text-gold">
                                    <FiMail size={18} />
                                </div>
                                <p className="text-sm text-white/70 font-roboto">
                                    support@kazimotors.com
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="text-gold">
                                    <FiPhone size={18} />
                                </div>
                                <p className="text-sm text-white/70 font-roboto">
                                    +91 98765 43210
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-white/40 font-roboto">
                        &copy; {new Date().getFullYear()} Kazi Motors. All rights reserved.
                    </p>
                    <p className="text-xs text-white/40 flex items-center gap-1 group font-roboto">
                        Driven by <span className="text-gold group-hover:scale-110 transition-transform duration-300">Passion</span> & Performance
                    </p>
                </div>
            </div>
        </footer>
    );
}
