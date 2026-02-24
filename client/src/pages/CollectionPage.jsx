import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { CollectionHero } from "../components/CollectionHero";
import { CollectionGrid } from "../components/CollectionGrid";
import { Footer } from "../components/Footer";

export function CollectionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-20">
      <Helmet>
        <title>Premium Auto Parts & Accessories Collection | Kazi Motors</title>
        <meta
          name="description"
          content="Browse our carefully curated collection of premium motorcycle accessories, high-performance parts, and custom modifications for your ride."
        />
        <meta
          name="keywords"
          content="motorcycle accessories online, auto parts store bhiwandi, custom bike parts india, royal enfield aftermarket parts, ktm modified accessories, yamaha spare parts, kazi motors collection"
        />
        <meta
          property="og:title"
          content="Premium Mods & Accessories | Kazi Motors Collection"
        />
        <meta
          property="og:description"
          content="Shop the finest auto parts and motorcycle accessories."
        />
        <link rel="canonical" href="https://kazimotors.com/collection" />
      </Helmet>
      <Header />
      <CollectionHero />
      <CollectionGrid />
      <Footer />
    </div>
  );
}
