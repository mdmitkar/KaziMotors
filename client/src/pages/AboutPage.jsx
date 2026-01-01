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
            <section ref={heroRef} className="relative h-screen flex flex-col justify-start items-start px-6 pt-32 md:pt-48 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay for readability */}
                    <img
                        src="/assets/owners/owner.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-60"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay z-20"></div>
                </div>

                <div className="relative z-30 text-left max-w-5xl mx-auto md:mx-0 md:pl-12">
                    <div className="overflow-hidden mb-2">
                        <h1 className="hero-title-line text-6xl md:text-8xl lg:text-9xl font-oswald font-bold text-white uppercase tracking-tighter leading-none">
                            Crafting
                        </h1>
                    </div>
                    <div className="overflow-hidden mb-6">
                        <h1 className="hero-title-line text-6xl md:text-8xl lg:text-9xl font-oswald font-bold text-transparent bg-clip-text bg-linear-to-b from-gold to-yellow-600 uppercase tracking-tighter leading-none">
                            Legends
                        </h1>
                    </div>
                    <p className="hero-subtitle text-zinc-300 font-inter text-lg md:text-xl max-w-2xl tracking-wide">
                        More than just a workshop. We are the architects of automotive perfection.
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
            <section className="py-24 bg-black relative">
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
            <section ref={awardsRef} className="py-32 bg-zinc-950 relative overflow-hidden">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Award 1 */}
                        <div
                            className="award-card group relative cursor-pointer"
                            onClick={() => setSelectedImage('/nobgfolder/award-nobg.webp')}
                        >
                            <div className="absolute -inset-1 bg-linear-to-b from-gold/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700"></div>
                            <div className="relative bg-black/50 border border-zinc-800 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center hover:border-gold/30 transition duration-500 h-full">
                                <div className="h-80 w-full flex items-center justify-center mb-8 relative">
                                    <img
                                        src="/nobgfolder/award-nobg.webp"
                                        alt="Award Recognition"
                                        className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-black/80 text-gold p-3 rounded-full backdrop-blur-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-auto">
                                    <h3 className="text-white font-oswald text-xl uppercase tracking-wide mb-2">Excellence Award</h3>
                                    <p className="text-zinc-500 font-inter text-sm">Recognized for outstanding service quality.</p>
                                </div>
                            </div>
                        </div>

                        {/* Award 2 */}
                        <div
                            className="award-card group relative cursor-pointer"
                            onClick={() => setSelectedImage('/nobgfolder/award-2-nobg.webp')}
                        >
                            <div className="absolute -inset-1 bg-linear-to-b from-gold/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700"></div>
                            <div className="relative bg-black/50 border border-zinc-800 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center hover:border-gold/30 transition duration-500 h-full">
                                <div className="h-80 w-full flex items-center justify-center mb-8 relative">
                                    <img
                                        src="/nobgfolder/award-2-nobg.webp"
                                        alt="Achievement Award"
                                        className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-black/80 text-gold p-3 rounded-full backdrop-blur-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-auto">
                                    <h3 className="text-white font-oswald text-xl uppercase tracking-wide mb-2">Best Performance</h3>
                                    <p className="text-zinc-500 font-inter text-sm">Awarded for highest customer satisfaction.</p>
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
