import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { About } from '../components/About';

export function AboutPage() {
    return (
        <main className="bg-black min-h-screen pt-20">
            <Header />
            {/* You can add a specific Hero for About Page here if needed, or just reusing the About section */}
            <div className="pt-10 pb-10 text-center">
                <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase tracking-wider mb-4">
                    About <span className="text-gold">Us</span>
                </h1>
                <p className="text-white/70 font-inter max-w-2xl mx-auto px-4">
                    Learn more about our journey and commitment to excellence.
                </p>
            </div>
            <About />
            <Footer />
        </main>
    );
}
