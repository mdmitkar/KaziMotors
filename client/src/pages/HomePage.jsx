import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/Header";
import { HomeHero } from "../components/HomeHero";
import { About } from "../components/About";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Products } from "../components/Products";
import { Partner } from "../components/Partner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
export function HomePage() {
  return (
    <main className="bg-black min-h-screen pt-20 transition-all duration-300">
      <Helmet>
        <title>Kazi Motors | Best Car & Bike Service Center in Bhiwandi</title>
        <meta
          name="description"
          content="Welcome to Kazi Motors. We specialize in premium car and bike servicing, denting, painting, ceramic coating, and custom motorcycle modifications in Bhiwandi. Expert mechanics for Royal Enfield, KTM, Yamaha, and four-wheelers."
        />
        <meta
          name="keywords"
          content="car repair bhiwandi, bike service bhiwandi, kazi motors, auto repair near me, denting painting, ceramic coating, custom bike modifications, royal enfield service"
        />
        <meta
          property="og:title"
          content="Kazi Motors | Premium Auto Service in Bhiwandi"
        />
        <meta
          property="og:description"
          content="Top-tier car and bike servicing, custom modifications, and automotive care in Mumbai/Bhiwandi."
        />
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
