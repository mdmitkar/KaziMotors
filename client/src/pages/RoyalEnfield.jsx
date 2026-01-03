import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function RoyalEnfield() {
    return (
        <div className="bg-black min-h-screen">
            <Header />

            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    >
                        <source src="/assets/videos/royal-enfield-1.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-black/40 to-black/20" />

                {/* Content */}
                <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mb-8 flex justify-center"
                        >
                            <img
                                src="/assets/brand-imgs/royalenfield2.webp"
                                alt="Royal Enfield Logo"
                                className="h-24 md:h-32 w-auto brightness-0 invert"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-white mb-6 uppercase tracking-tighter"
                        >
                            MADE FOR <span className="text-gold">LEGENDS</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg md:text-xl text-white/80 font-inter mb-10 max-w-2xl mx-auto uppercase tracking-[0.2em]"
                        >
                            Pure Motorcycling Since 1901. Experience the Timeless Ride.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <Link
                                to="/collection"
                                className="px-10 py-4 bg-gold text-black font-oswald font-bold text-sm hover:bg-white transition-all duration-300 uppercase tracking-[0.2em] rounded-full inline-block"
                            >
                                Explore Accessories
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-20" />
            </section>

            <Footer />
        </div>
    )
}
