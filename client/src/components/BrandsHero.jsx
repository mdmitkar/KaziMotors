import { motion } from "framer-motion"

export function BrandsHero() {
    return (
        <section className="bg-black py-20 px-4 overflow-hidden">
            <div>
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 flex flex-col justify-center items-center"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px]">
                                            <img
                                                src="/assets/brand-imgs/royalenfieldclrfull.png"
                                                alt="Royal Enfield"
                                                className="h-12 md:h-20 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                        
                        <h2 className=" text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            ROYAL <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">ENFIELD</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">
                            Meet The Royalty
                        </span>
                        <div className = "bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl">
                            {""}
                        </div>
                    </motion.div>
                </div>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">


                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 z-10 text-left"
                    >
                        <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">
                            Our Partners
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                            YOUR CHOICE, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">OUR EXPERTISE</span>
                        </h2>

                        <div className="space-y-6">
                            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
                                At <span className="text-gold font-bold">Kazi Motors</span>, we believe in giving you the freedom to choose. Whether you're a fan of Royal Enfield's classic charm, Honda's reliability, or Yamaha's sporty edge, we've got you covered.
                            </p>
                            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                                From powerful engines and precision components to essential accessories, we ensure quality that enhances your ride. No matter your style or machine, our range is built to deliver confidence on the road and satisfaction in every mile.
                            </p>
                            <p className="text-white/70 text-lg leading-relaxed max-w-2xl italic border-l-2 border-gold/50 pl-4">
                                Driven by passion and powered by expertise, Kazi Motors is your trusted destination for elite motorcycle solutions.
                            </p>
                        </div>
                    </motion.div>
                    {/* Visual Content - Overlapping Cards */}
                    <div className="flex-1 relative h-[500px] md:h-[600px] w-full mt-10 lg:mt-0">

                        {/* Background Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 100, rotate: 5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                            className="absolute top-10 right-0 w-[75%] h-[350px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-8 border-white/5 z-10 cursor-pointer transition-all duration-500"
                        >
                            <img
                                src="/assets/rebike-imgs/rebike1.png"
                                alt="Premium Motorcycle Parts"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-2xl font-bold text-white font-oswald uppercase tracking-tight">Precision Parts</h3>
                                <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase">Engineering Excellence</p>
                            </div>
                        </motion.div>

                        {/* Foreground Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -100, rotate: -10 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                            className="absolute bottom-0 left-0 w-[75%] h-[350px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.9)] border-8 border-gold/20 z-20 cursor-pointer transition-all duration-500"
                        >
                            <img
                                src="/assets/rebike-imgs/rebike3.png"
                                alt="Custom Alloy Wheels"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <h3 className="text-2xl font-bold text-white font-oswald uppercase tracking-tight">Custom Alloys</h3>
                                <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase">Luxury Performance</p>
                            </div>
                        </motion.div>

                        {/* Decorative Element */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 blur-[80px] rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 blur-[80px] rounded-full" />
                    </div>

                </div>
            </div>

        </section>
    )
}
