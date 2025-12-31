import { motion } from "framer-motion"

export function BrandsHero() {
    return (
        <>
            <section
                id="royal-enfield"
                className="relative  overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/rebike-imgs/rebikemain.png")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/70 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center ">
                    <div className="">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-16 flex flex-col justify-center items-center py-10"
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
                            <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl">
                                {""}
                            </div>
                        </motion.div>
                    </div>
                    <div className="section-wrapper">


                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left "
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">
                                Our Top Partner
                            </span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide bg-whie">
                                A LEGACY OF TRUST, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">THE ROYAL ENFIELD WAY</span>
                            </h2>
                            <div className="space-y-10 max-w-2xl">

                                {/* Section 1 */}
                                <div className="space-y-3  border-l-2 border-gold/50 pl-2">
                                    <h3 className="text-gold text-xl md:text-2xl font-semibold">
                                        <span className="text-gradient text-2xl">Royal Enfield</span>{" "}
                                        Legacy in Bhiwandi
                                    </h3>
                                    <ul className="space-y-2 text-white/70 list-disc list-inside hover:text-gold">
                                        <li>Among the first in Bhiwandi to begin supplying Royal Enfield auto parts</li>
                                        <li>Started with a clear understanding of local rider needs</li>
                                        <li>Built our presence through consistency, service, and rider trust</li>
                                        <li>Grown alongside the Royal Enfield riding community</li>
                                    </ul>
                                </div>

                                {/* Section 2 */}
                                <div className="flex justify-end bg-whit ">

                                    <div className="space-y-3 border-l-2 border-gold/50 pl-2">
                                        <h3 className="text-gold text-xl md:text-2xl font-semibold">
                                            Pioneers of <span className="text-gradient text-2xl">Royal Enfield</span>{" "} Authenticity
                                        </h3>
                                        <ul className="space-y-2 text-white/70 list-disc list-inside hover:text-gold">
                                            <li>Exclusive focus on genuine Royal Enfield parts</li>
                                            <li>Strict quality checks for durability and performance</li>
                                            <li>Trusted by riders who value authenticity and reliability</li>
                                        </ul>
                                    </div>
                                </div>


                                {/* Section 3 */}
                                <div className="flex justify-between">

                                    <div className="space-y-3 border-l-2 border-gold/50 pl-4">
                                        <h3 className="text-gold text-xl md:text-2xl font-semibold">
                                            Trusted by Riders
                                        </h3>
                                        <ul className="space-y-2 text-white/70 italic list-disc list-inside hover:text-gold">
                                            <li>Built on years of industry experience</li>
                                            <li>Preferred choice of passionate motorcycle riders</li>
                                            <li>A commitment to reliability in every mile</li>
                                        </ul>
                                    </div>
                                </div>


                            </div>



                            {/* <div className="space-y-6">
                            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
                                At <span className="text-gold font-bold">Kazi Motors</span>, we believe in giving you the freedom to choose. Whether you're a fan of Royal Enfield's classic charm, Honda's reliability, or Yamaha's sporty edge, we've got you covered.
                            </p>
                            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
                                From powerful engines and precision components to essential accessories, we ensure quality that enhances your ride. No matter your style or machine, our range is built to deliver confidence on the road and satisfaction in every mile.
                            </p>
                            <p className="text-white/70 text-lg leading-relaxed max-w-2xl italic border-l-2 border-gold/50 pl-4">
                                Driven by passion and powered by expertise, Kazi Motors is your trusted destination for elite motorcycle solutions.
                            </p>
                        </div> */}
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

            {/* Honda Section */}
            <section
                id="honda"
                className="relative  px-4 overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/bikefix-imgs/fix1.png")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/80 z-0"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 flex flex-col justify-center items-center py-10"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px]">
                            <img
                                src="/assets/brand-imgs/honda2.png"
                                alt="Honda"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            HONDA <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">RELIABILITY</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">
                            The Power of Dreams
                        </span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper  flex flex-col lg:flex-row-reverse ">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">
                                Premium Performance
                            </span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                ENGINEERING PERFECTION, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">WITH HONDA GENUINE PARTS</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">We provide a comprehensive range of genuine Honda parts designed to maintain the peak performance of your machine. From essential engine components to sleek accessories, ensure your Honda stays true to its legacy.</p>
                                <ul className="space-y-4 list-none">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                                        <span>Optimum performance for all Honda models</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                                        <span>Precision-engineered for durability</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                                        <span>Guaranteed authenticity and fitment</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-gold/20"
                            >
                                <img src="/assets/reparts-imgs/part4.png" alt="Honda Parts" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Yamaha Section */}
            <section
                id="yamaha"
                className="relative  px-4 overflow-hidden"
                style={{
                    backgroundImage: 'url("/assets/bikefix-imgs/fix2.png")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                {/* Overlay for better readability */}
                <div className="absolute inset-0 bg-black/80 z-0"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 flex flex-col justify-center items-center py-10"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px]">
                            <img
                                src="/assets/brand-imgs/yamaha2.png"
                                alt="Yamaha"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            YAMAHA <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">SPIRIT</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">
                            Revs Your Heart
                        </span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper flex flex-col lg:fl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">
                                Sport Performance
                            </span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                UNLEASH THE POWER, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">YAMAHA PERFORMANCE PARTS</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">Experience the thrill of speed and precision with our curated selection of Yamaha parts. Built for those who demand more from their machines, our Yamaha range ensures every ride is an adventure.</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 border border-gold/20 rounded-xl bg-white/5">
                                        <h4 className="text-gold font-bold mb-1 uppercase text-sm">Racing Tech</h4>
                                        <p className="text-xs">Advanced engineering for the track.</p>
                                    </div>
                                    <div className="p-4 border border-gold/20 rounded-xl bg-white/5">
                                        <h4 className="text-gold font-bold mb-1 uppercase text-sm">Durability</h4>
                                        <p className="text-xs">Reliability you can trust.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-gold/20"
                            >
                                <img src="/assets/reparts-imgs/part5.png" alt="Yamaha Parts" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
