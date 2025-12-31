import { BrandsHero } from "../components/BrandsHero"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
export function BrandsPage() {
    return(
        <div className="bg-black min-h-screen pt-20">
            <Header />
            <BrandsHero />
            <Footer />
        </div>
    )
}