import React, { useRef, useLayoutEffect } from 'react';
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
    const storyRef = useRef(null);
    const awardsRef = useRef(null);

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

        // Owners Animation
        gsap.from(".owner-card", {
            scrollTrigger: {
                trigger: storyRef.current,
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out"
        });

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
                <meta name="description" content="Learn about the minds behind Kazi Motors - Arif, Sameer, and Rafiq. We craft legends with passion and expertise." />
                <link rel="canonical" href="https://kazimotors.com/about" />
            </Helmet>
            <Header />

            {/* 1. Hero Section */}
            <section ref={heroRef} className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                </div>

                <div className="relative z-10 text-center max-w-5xl mx-auto">
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
                    <p className="hero-subtitle text-zinc-400 font-inter text-lg md:text-xl max-w-2xl mx-auto tracking-wide">
                        More than just a workshop. We are the architects of automotive perfection.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-px h-16 bg-linear-to-b from-transparent via-gold to-transparent opacity-50"></div>
                </div>
            </section>

            {/* 2. Founders / Owners Section */}
            <section ref={storyRef} className="story-section py-32 px-6 md:px-12 relative z-10 bg-black">
                <div className="container mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 lg:mb-24">
                        <h2 className="text-gold font-oswald text-sm md:text-base tracking-[0.4em] uppercase mb-6 flex items-center justify-center gap-4">
                            <span className="w-12 h-px bg-gold/50"></span>
                            The Minds Behind the Machine
                            <span className="w-12 h-px bg-gold/50"></span>
                        </h2>
                        <p className="text-3xl md:text-5xl font-oswald text-white leading-tight uppercase max-w-2xl mx-auto">
                            Driven by <span className="text-zinc-600">Passion</span>, defined by <span className="text-gold">Expertise</span>
                        </p>
                    </div>

                    {/* 3 Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                        {/* Owner 1 */}
                        <div className="owner-card group">
                            <div className="relative overflow-hidden mb-6 aspect-square rounded-sm border border-zinc-900 transition-colors duration-500">
                                <img
                                    src="/assets/owners/owner1.webp"
                                    alt="Founder"
                                    className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-gold font-oswald text-sm uppercase tracking-widest mb-1">Founder</p>
                                    <h3 className="text-white font-oswald text-2xl uppercase font-bold">Arif Kazi</h3>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-zinc-400 font-inter text-sm leading-relaxed text-justify">
                                    With over 15 years of hands-on experience, Arif is the visionary behind Kazi Motors. His obsession with detail and deep understanding of engine mechanics has set the standard for quality in Bhiwandi.
                                </p>
                            </div>
                        </div>

                        {/* Owner 2 */}
                        <div className="owner-card group mt-8 md:mt-0">
                            <div className="relative overflow-hidden mb-6 aspect-square rounded-sm border border-zinc-900 transition-colors duration-500">
                                <img
                                    src="/assets/owners/owner2.webp"
                                    alt="Co-Founder"
                                    className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-gold font-oswald text-sm uppercase tracking-widest mb-1">Co-Founder</p>
                                    <h3 className="text-white font-oswald text-2xl uppercase font-bold">Sameer Kazi</h3>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-zinc-400 font-inter text-sm leading-relaxed text-justify">
                                    The strategy expert who ensures every customer leaves satisfied. Sameer blends technical knowledge with exceptional service management, making sure operations run smoother than a freshly tuned engine.
                                </p>
                            </div>
                        </div>

                        {/* Owner 3 */}
                        <div className="owner-card group mt-8 md:mt-0">
                            <div className="relative overflow-hidden mb-6 aspect-square rounded-sm border border-zinc-900 transition-colors duration-500">
                                <img
                                    src="/assets/owners/owner3.webp"
                                    alt="Head Technician"
                                    className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-gold font-oswald text-sm uppercase tracking-widest mb-1">Head Technician</p>
                                    <h3 className="text-white font-oswald text-2xl uppercase font-bold">Rafiq Khan</h3>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-zinc-400 font-inter text-sm leading-relaxed text-justify">
                                    The wizard of diagnostics. Rafiq brings a modern approach to classic problems, specializing in complex repairs and performance tuning that brings out the true beast in every bike.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Awards Section */}
            <section ref={awardsRef} className="py-32 bg-zinc-950 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-gold font-oswald text-sm tracking-[0.3em] uppercase block mb-4">Recognition</span>
                        <h2 className="text-4xl md:text-6xl font-oswald text-white uppercase font-bold">
                            Hall of <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-white">Fame</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Award 1 */}
                        <div className="award-card group relative">
                            <div className="absolute -inset-1 bg-linear-to-b from-gold/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700"></div>
                            <div className="relative bg-black/50 border border-zinc-800 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center hover:border-gold/30 transition duration-500 h-full">
                                <div className="h-80 w-full flex items-center justify-center mb-8">
                                    <img
                                        src="/nobgfolder/award-nobg.webp"
                                        alt="Award Recognition"
                                        className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                </div>
                                <div className="text-center mt-auto">
                                    <h3 className="text-white font-oswald text-xl uppercase tracking-wide mb-2">Excellence Award</h3>
                                    <p className="text-zinc-500 font-inter text-sm">Recognized for outstanding service quality.</p>
                                </div>
                            </div>
                        </div>

                        {/* Award 2 */}
                        <div className="award-card group relative">
                            <div className="absolute -inset-1 bg-linear-to-b from-gold/20 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700"></div>
                            <div className="relative bg-black/50 border border-zinc-800 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center hover:border-gold/30 transition duration-500 h-full">
                                <div className="h-80 w-full flex items-center justify-center mb-8">
                                    <img
                                        src="/nobgfolder/award-2-nobg.webp"
                                        alt="Achievement Award"
                                        className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(234,179,8,0.2)] group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
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

            <Footer />
        </main>
    );
}
