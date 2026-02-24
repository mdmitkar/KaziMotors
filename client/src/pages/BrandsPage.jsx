import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BrandsHero } from "../components/BrandsHero";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function BrandsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the '#' character
      const id = hash.replace("#", "");

      // Wait a brief moment to ensure DOM is fully rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="bg-black min-h-screen pt-20">
      <Helmet>
        <title>
          Brands We Service | Royal Enfield, KTM, Yamaha & More in Bhiwandi
        </title>
        <meta
          name="description"
          content="Kazi Motors provides expert service and quality auto parts for top brands including Royal Enfield, KTM, Yamaha, Honda, and more in Bhiwandi and Mumbai."
        />
        <meta
          name="keywords"
          content="royal enfield service bhiwandi, ktm repair center near me, yamaha bike mods, honda two wheeler service, premium bike mechanics, best garage for sportbikes"
        />
        <meta
          property="og:title"
          content="Expert Service for Top Auto Brands | Kazi Motors"
        />
        <meta
          property="og:description"
          content="Specialized repair and modification for your favorite motorcycle & car brands."
        />
        <link rel="canonical" href="https://kazimotors.com/brands" />
      </Helmet>
      <Header />
      <BrandsHero />
      <Footer />
    </div>
  );
}
