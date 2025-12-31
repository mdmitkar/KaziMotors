import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrandsHero } from "../components/BrandsHero"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export function BrandsPage() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Remove the '#' character
            const id = hash.replace('#', '');

            // Wait a brief moment to ensure DOM is fully rendered
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [hash]);

    return (
        <div className="bg-black min-h-screen pt-20">
            <Header />
            <BrandsHero />
            <Footer />
        </div>
    )
}