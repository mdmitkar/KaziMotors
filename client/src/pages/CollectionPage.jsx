import React from 'react';
import { Header } from '../components/Header';
import { CollectionHero } from '../components/CollectionHero';
import { CollectionGrid } from '../components/CollectionGrid';
import { Footer } from '../components/Footer';

export function CollectionPage() {
    return (
        <div className="bg-black min-h-screen pt-20">
            <Header />
            <CollectionHero />
            <CollectionGrid />
            <Footer />
        </div>
    )
}