import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function AboutPage() {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const awardsRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useGSAP(() => {
        // Hero Animation
        const tl = gsap.timeline();

        tl.from(".hero-title-line", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out"
        })
            .from(".hero-subtitle", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5");

        // Awards Animation
        gsap.from(".award-card", {
            scrollTrigger: {
                trigger: awardsRef.current,
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "back.out(1.7)"
        });

    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="bg-black min-h-screen selection:bg-gold selection:text-black overflow-hidden relative">
            <Helmet>
                <title>About Us | Kazi Motors</title>
                <meta name="description" content="Learn about the minds behind Kazi Motors. We craft legends with passion and expertise." />
                <link rel="canonical" href="https://kazimotors.com/about" />
            </Helmet>
            <Header />

            {/* 1. Hero Section */}
            <section ref={heroRef} className="relative h-screen flex flex-col justify-start items-start px-6 pt-16 md:pt-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay for readability */}
                    <img
                        src="/assets/owners/owner.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover object-[65%_top] md:object-top opacity-60 translate-y-12"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay z-20"></div>
                </div>

                <div className="relative z-30 text-left max-w-10xl mx-auto md:mx-0 md:pl-12">
                    <div className="overflow-hidden mb-2">
                        <h1 className="hero-title-line text-2xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-tighter leading-none">
                            Crafting
                        </h1>
                    </div>
                    <div className="overflow-hidden mb-6">
                        <h1 className="hero-title-line text-6xl md:text-8xl lg:text-7xl font-oswald font-bold text-transparent bg-clip-text bg-linear-to-b from-gold to-yellow-600 uppercase tracking-tighter leading-none">
                            Legends
                        </h1>
                    </div>
                    <p className="hero-subtitle text-zinc-300 font-inter text-lg md:text-xl max-w-2xl tracking-wide text-justify">
                        Founded and led by <span className='text-gold font-bold'>Nisaar Ahemad Kazi</span>, our business is built on trust, experience, and a deep understanding of the motorcycle industry. With over <span>12 years of hands on experience
                            </span>,the owner has been actively involved in sourcing, supplying, and maintaining high quality two wheeler parts. This long journey has helped us understand customer needs, ensure product authenticity  and deliver reliable solutions every time What started as a small initiative has grown into a trusted name, driven by passion, expertise, and a commitment to quality service.
                        
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-30">
                    <div className="w-px h-16 bg-linear-to-b from-transparent via-gold to-transparent opacity-50"></div>
                </div>
            </section>

            {/* 2. The Legacy / Journey Section */}
            <section className="py-24 bg-zinc-950 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                        <div className="lg:col-span-2">
                            <span className="text-gold font-oswald text-sm tracking-[0.3em] uppercase block mb-4">Our History</span>
                            <h2 className="text-4xl md:text-5xl font-oswald text-white uppercase font-bold mb-6">
                                From Passion to <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-white">Powerhouse</span>
                            </h2>
                            <p className="text-zinc-400 font-inter leading-relaxed mb-6 text-lg text-justify">
                                What started as a small garage driven by a sheer love for engines has evolved into the region's premier destination for superbike maintenance. Kazi Motors wasn't built overnight; it was forged through years of grease, grit, and an unyielding commitment to excellence.
                            </p>
                            <p className="text-zinc-400 font-inter leading-relaxed text-lg text-justify">
                                We believe that every bike tells a story, and our job is to keep that story running smooth. Whether it's a vintage classic or a modern beast, we treat every machine with the respect it deserves, ensuring that when you ride out, you ride with confidence.
                            </p>
                        </div>
                        <div className="relative lg:col-span-3">
                            <div className="absolute -inset-4 bg-gold/10 rounded-lg blur-lg"></div>
                            <img
                                src="/assets/owners/owner-2.png"
                                alt="Kazi Motors History"
                                className="relative rounded-lg border border-zinc-800 w-full h-auto transition duration-700 object-cover object-top aspect-video shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values Section */}
            <section className="pt-24 pb-0 bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-gold font-oswald text-sm tracking-[0.3em] uppercase block mb-4">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-oswald text-white uppercase font-bold">
                            The Kazi <span className="text-zinc-600">Standard</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Value 1 */}
                        <div className="p-8 border border-zinc-900 bg-zinc-950/50 rounded-lg hover:border-gold/50 transition duration-300 group">
                            <h3 className="text-2xl font-oswald text-white uppercase mb-4 group-hover:text-gold transition-colors">Precision</h3>
                            <p className="text-zinc-500 font-inter">
                                We don't just fix bikes; we engineer solutions. Every bolt, every tune is executed with surgical precision to ensure peak performance.
                            </p>
                        </div>
                        {/* Value 2 */}
                        <div className="p-8 border border-zinc-900 bg-zinc-950/50 rounded-lg hover:border-gold/50 transition duration-300 group">
                            <h3 className="text-2xl font-oswald text-white uppercase mb-4 group-hover:text-gold transition-colors">Integrity</h3>
                            <p className="text-zinc-500 font-inter">
                                Transparency is key. We provide honest diagnostics and genuine parts, building a relationship of trust with every rider.
                            </p>
                        </div>
                        {/* Value 3 */}
                        <div className="p-8 border border-zinc-900 bg-zinc-950/50 rounded-lg hover:border-gold/50 transition duration-300 group">
                            <h3 className="text-2xl font-oswald text-white uppercase mb-4 group-hover:text-gold transition-colors">Masters of Craft</h3>
                            <p className="text-zinc-500 font-inter">
                                With decades of combined experience, our team brings a depth of knowledge that stands unrivaled in the industry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Awards / Hall of Fame Section */}
            <section ref={awardsRef} className="pt-20 pb-32 bg-zinc-950 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-gold font-oswald text-sm tracking-[0.3em] uppercase block mb-4">Recognition</span>
                        <h2 className="text-4xl md:text-6xl font-oswald text-white uppercase font-bold">
                            Hall of <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-white">Fame</span>
                        </h2>
                        <p className="text-zinc-500 font-inter mt-4 max-w-2xl mx-auto">
                            Honored by the industry, trusted by riders. Click to enlarge.
                        </p>
                    </div>

                    <div className="flex flex-col gap-16 max-w-6xl mx-auto">
                        {/* Award 1: Excellence Award */}
                        <div
                            className="group relative w-full bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_50px_rgba(234,179,8,0.1)]"
                            onClick={() => setSelectedImage('/nobgfolder/award-nobg.webp')}
                        >
                            {/* Creative Background Element */}
                            <div className="absolute top-0 right-0 w-[60%] h-full opacity-10 group-hover:opacity-20 transition-opacity duration-700 mix-blend-luminosity">
                                <img
                                    src="/nobgfolder/award-nobg.webp"
                                    alt="Background Award"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <div className="absolute inset-0 bg-linear-to-r from-black via-zinc-950/80 to-transparent z-10"></div>

                            {/* Content */}
                            <div className="relative z-20 p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-12 items-center">
                                {/* Text Side */}
                                <div>
                                    <div className="mb-6 inline-flex items-center gap-2 text-gold/80 border border-gold/30 rounded-full px-4 py-1.5 w-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <span className="text-xs uppercase tracking-widest font-oswald">Highest Honor</span>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-oswald text-white uppercase font-bold mb-6 leading-none">
                                        Excellence <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-yellow-700">Award</span>
                                    </h3>
                                    <p className="text-zinc-400 font-inter text-base lg:text-lg leading-relaxed mb-8">
                                        This prestigious accolade recognizes our unwavering commitment to quality. It is a testament to the countless hours spent perfecting every tune and the dedication that goes into every service. A symbol of trust and superior craftsmanship.
                                    </p>
                                    <div className="flex items-center gap-4 text-white group-hover:text-gold transition-colors">
                                        <span className="font-oswald uppercase tracking-wider text-sm">View Certificate</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-2 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                                {/* Image Side */}
                                <div className="flex justify-center md:justify-end">
                                    <img
                                        src="/nobgfolder/award-nobg.webp"
                                        alt="Excellence Award"
                                        className="h-64 lg:h-80 w-auto object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.3)] group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Award 2: Best Performance */}
                        <div
                            className="group relative w-full bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_50px_rgba(234,179,8,0.1)]"
                            onClick={() => setSelectedImage('/nobgfolder/award-2-nobg.webp')}
                        >
                            {/* Creative Background Element */}
                            <div className="absolute top-0 left-0 w-[60%] h-full opacity-10 group-hover:opacity-20 transition-opacity duration-700 mix-blend-luminosity">
                                <img
                                    src="/nobgfolder/award-2-nobg.webp"
                                    alt="Background Award"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            {/* Inverted Gradient for Right-Side Content */}
                            <div className="absolute inset-0 bg-linear-to-l from-black via-zinc-950/80 to-transparent z-10"></div>

                            {/* Content */}
                            <div className="relative z-20 p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-12 items-center">
                                {/* Image Side (Left for this card) */}
                                <div className="flex justify-center md:justify-start order-2 md:order-1">
                                    <img
                                        src="/nobgfolder/award-2-nobg.webp"
                                        alt="Best Performance Award"
                                        className="h-64 lg:h-80 w-auto object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.3)] group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Text Side */}
                                <div className="order-1 md:order-2 text-left md:text-right">
                                    <div className="mb-6 inline-flex items-center gap-2 text-gold/80 border border-gold/30 rounded-full px-4 py-1.5 w-fit ml-auto">
                                        <span className="text-xs uppercase tracking-widest font-oswald">Customer Choice</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-oswald text-white uppercase font-bold mb-6 leading-none">
                                        Best <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-yellow-700">Performance</span>
                                    </h3>
                                    <p className="text-zinc-400 font-inter text-base lg:text-lg leading-relaxed mb-8">
                                        Awarded for consistently delivering the highest customer satisfaction and mechanical performance. This award reflects our promise: when we touch a bike, it leaves better than new. The true gold standard of service.
                                    </p>
                                    <div className="flex items-center gap-4 text-white group-hover:text-gold transition-colors justify-end">
                                        <span className="font-oswald uppercase tracking-wider text-sm">View Certificate</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-2 transition-transform">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <img
                        src={selectedImage}
                        alt="Award Full View"
                        className="max-w-full max-h-[90vh] object-contain drop-shadow-2xl animate-in zoom-in-50 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <Footer />
        </main>
    );
}
