import React from 'react';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import{About} from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Products } from '../components/Products';
import {Partner} from "../components/Partner";
import {Contact} from "../components/Contact";
import { Footer } from '../components/Footer';
export function HomePage() {
    return (
        <main className="bg-black min-h-screen pt-20 transition-all duration-300">
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