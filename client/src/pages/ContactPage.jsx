import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactPage() {
    const titleRef = useRef(null);
    const formRef = useRef(null);
    const infoRefs = useRef([]);
    const mapRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        // Title Animation
        gsap.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }
        );

        // Info Cards Animation (Stagger)
        gsap.fromTo(infoRefs.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                delay: 0.3
            }
        );

        // Form Animation
        gsap.fromTo(formRef.current,
            { x: 30, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: "power2.out"
            }
        );

        // Map Animation
        gsap.fromTo(mapRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.7,
                ease: "expo.out"
            }
        );

    }, []);

    // Scroll to hash handling
    useEffect(() => {
        if (location.hash === '#map') {
            const element = document.getElementById('map');
            if (element) {
                // Determine if we need to wait for animations or if immediate scroll is fine.
                // A small timeout helps with layout shifts from animations.
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 1000); // 1-second delay to allow GSAP intro animations to play/start
            }
        }
    }, [location]);

    const addToInfoRefs = (el) => {
        if (el && !infoRefs.current.includes(el)) {
            infoRefs.current.push(el);
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, message } = formData;

        const whatsappMessage = `*New Inquiry from Website* %0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Message:* ${message}`;

        const whatsappUrl = `https://wa.me/918855989211?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-black min-h-screen text-white font-inter selection:bg-gold selection:text-black">
            <Helmet>
                <title>Contact Us | Kazi Motors</title>
                <meta name="description" content="Get in touch with Kazi Motors for inquiries, appointments, and custom modification requests." />
                <link rel="canonical" href="https://kazimotors.com/contact" />
            </Helmet>
            <Header />

            <main className="pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Title, Info, Images */}
                    <div className="space-y-10">
                        {/* Title Section */}
                        <div ref={titleRef}>
                            <div className="flex items-center space-x-3 mb-4 justify-start">
                                <div className="w-10 h-px bg-gold" />
                                <span className="text-gold font-oswald text-xs md:text-sm font-medium tracking-[0.6em] uppercase">
                                    Get In Touch
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold uppercase tracking-tighter text-white mb-6 leading-none">
                                REACH <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-white/70">KAZI</span><br />
                                <span className="text-white">AUTO PARTS.</span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                                Have a vision for your ride? Let's discuss your transformation.
                                Our team is ready to turn your automotive dreams into reality.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            {/* Call Us */}
                            <div ref={addToInfoRefs} className="group bg-[#0a0a0a] border border-white/10 p-6 hover:border-gold/50 transition-all duration-300 rounded-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                                <div className="flex items-center gap-6">
                                    <div className="p-3 bg-white/5 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                        <FiPhone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-oswald font-bold uppercase mb-1 text-white group-hover:text-gold transition-colors">Call Us</h3>
                                        <a href="tel:+918855989211" className="text-lg font-bold text-gray-300 hover:text-white transition-colors">+91 88559 89211</a>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div ref={addToInfoRefs} className="group bg-[#0a0a0a] border border-white/10 p-6 hover:border-gold/50 transition-all duration-300 rounded-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                                <div className="flex items-center gap-6">
                                    <div className="p-3 bg-white/5 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                                        <FiMail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-oswald font-bold uppercase mb-1 text-white group-hover:text-gold transition-colors">Email</h3>
                                        <a href="mailto:kazimotors@gmail.com" className="text-lg font-bold text-gray-300 hover:text-white transition-colors break-all">kazimotors@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            {/* Visit Us */}
                            <div ref={addToInfoRefs} className="group bg-[#0a0a0a] border border-white/10 p-6 hover:border-gold/50 transition-all duration-300 rounded-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                                <div className="flex items-start gap-6">
                                    <div className="p-3 bg-white/5 rounded-full text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300 mt-1">
                                        <FiMapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-oswald font-bold uppercase mb-1 text-white group-hover:text-gold transition-colors">Visit Us</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            352, Panjrapool, Near Nissan Hotel,<br />
                                            4th Nizampura, Bhiwandi, 421302
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium Bullet Showcase Images */}
                        <div ref={addToInfoRefs} className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                            <div className="relative group overflow-hidden rounded-sm aspect-square border border-white/5 hover:border-gold/30 transition-all duration-500">
                                <img
                                    src="/assets/rebike-imgs/rebikemain.webp"
                                    alt="Royal Enfield Custom"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative group overflow-hidden rounded-sm aspect-square border border-white/5 hover:border-gold/30 transition-all duration-500">
                                <img
                                    src="/assets/rebike-imgs/rebike1.webp"
                                    alt="Royal Enfield Modification"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Inquiry Form - Moved UP by layout structure */}
                    <div ref={formRef} className="bg-[#111] p-8 md:p-12 rounded-sm shadow-2xl border border-white/10 relative overflow-hidden lg:sticky lg:top-32">
                        {/* Subtle Gold Glow */}
                        <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

                        <h2 className="text-3xl font-oswald font-bold mb-8 text-white flex items-center gap-2">
                            INQUIRY FORM <span className="text-gold text-4xl">.</span>
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gold text-xs font-bold tracking-[0.2em] uppercase ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="ENTER FULL NAME"
                                        required
                                        className="w-full bg-black/50 border border-white/10 text-white p-4 focus:outline-none focus:border-gold transition-all duration-300 rounded-sm placeholder-white/20 text-sm font-medium tracking-wide"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gold text-xs font-bold tracking-[0.2em] uppercase ml-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91-00000-00000"
                                        required
                                        className="w-full bg-black/50 border border-white/10 text-white p-4 focus:outline-none focus:border-gold transition-all duration-300 rounded-sm placeholder-white/20 text-sm font-medium tracking-wide"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gold text-xs font-bold tracking-[0.2em] uppercase ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="YOUR@EMAIL.COM"
                                    className="w-full bg-black/50 border border-white/10 text-white p-4 focus:outline-none focus:border-gold transition-all duration-300 rounded-sm placeholder-white/20 text-sm font-medium tracking-wide"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gold text-xs font-bold tracking-[0.2em] uppercase ml-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="TELL US ABOUT YOUR VISION..."
                                    className="w-full bg-black/50 border border-white/10 text-white p-4 focus:outline-none focus:border-gold transition-all duration-300 rounded-sm placeholder-white/20 resize-none text-sm font-medium tracking-wide"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-gold text-black font-oswald font-bold uppercase py-4 hover:bg-white hover:text-black transition-all duration-300 tracking-[0.2em] text-sm mt-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div id="map" ref={mapRef} className="mt-24 w-full h-[450px] bg-transparent rounded-sm relative border border-white/10 overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.33993977813782!2d73.06201001124626!3d19.306746091637013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd5eaf4622bb%3A0x8071cac652bf773c!2sKazi%20Auto%20Parts!5e0!3m2!1sen!2sin!4v1767169560738!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </main>

            <Footer />
        </div>
    );
}
