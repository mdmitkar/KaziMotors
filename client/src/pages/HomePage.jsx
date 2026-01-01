import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Products } from '../components/Products';
import { Partner } from "../components/Partner";
import { Contact } from "../components/Contact";
import { Footer } from '../components/Footer';
export function HomePage() {
    return (
        <main className="bg-black min-h-screen pt-20 transition-all duration-300">
            <Helmet>
                <title>Kazi Motors | Home - Premium Mods & Accessories</title>
                <meta name="description" content="Welcome to Kazi Motors. We specialize in premium motorcycle modifications and accessories for biking enthusiasts." />
                <link rel="canonical" href="https://kazimotors.com/" />
            </Helmet>
            <Header />
            <HomeHero />
            <About />
            <WhyChooseUs />
            <Partner />
            <Products />
            <Contact />
            <Footer />
        </main>
    );
}