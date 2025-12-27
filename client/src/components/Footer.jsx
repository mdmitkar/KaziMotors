import React from "react";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-charcoal border-t border-gold/20 pt-16 pb-8 font-inter">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h2 className="text-3xl font-oswald font-bold text-white uppercase tracking-widest mb-4">
                            <span className="text-gold">KAZI</span> MOTORS
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Elevating the Royal Enfield experience since 1984. Premium parts, expert customization, and a passion for the ride.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-oswald text-white uppercase tracking-wider mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-silver">
                            <li className="flex items-center gap-3">
                                <FaWhatsapp className="text-gold text-xl" />
                                <a href="https://wa.me/918855989211" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                                    +91 88559 89211
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaInstagram className="text-gold text-xl" />
                                <a href="https://www.instagram.com/kazi_auto_parts/" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                                    @kazi_auto_parts
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-gold text-xl" />
                                <span>Royal Enfield Workshop, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours/Info */}
                    <div>
                        <h3 className="text-xl font-oswald text-white uppercase tracking-wider mb-6">Visit Workshop</h3>
                        <p className="text-gray-400 mb-2">Open Monday - Saturday</p>
                        <p className="text-gold font-bold text-lg">10:00 AM - 09:00 PM</p>
                        <p className="text-gray-500 text-sm mt-4 italic">
                            *Fitting services available by appointment.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Kazi Motors. All Rites Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
