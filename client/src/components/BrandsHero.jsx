import { motion } from "framer-motion"

export function BrandsHero() {
    return (
        <>
            {/* Royal Enfield Section */}
            <section
                id="royal-enfield"
                className="relative overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/rebike-imgs/rebikemain.png")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 flex flex-col justify-center items-center py-20"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px] mb-4">
                            <img
                                src="/assets/brand-imgs/royalenfieldclrfull.png"
                                alt="Royal Enfield"
                                className="h-12 md:h-20 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            ROYAL <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">ENFIELD</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">
                            Meet The Royalty
                        </span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">Our Top Partner</span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                A LEGACY OF TRUST, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">THE ROYAL ENFIELD WAY</span>
                            </h2>
                            <div className="space-y-6 max-w-2xl text-white/70">
                                <p className="text-lg">Experience the timeless elegance and robust performance of Royal Enfield. We provide genuine parts and accessories that maintain the classic soul of your machine while ensuring modern reliability.</p>
                                <ul className="space-y-2 list-disc list-inside hover:text-gold transition-colors">
                                    <li>Authentic components for every model</li>
                                    <li>Built for the long road ahead</li>
                                    <li>Trusted by the global riding community</li>
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
                                <img src="/assets/rebike-imgs/rebike1.png" alt="Royal Enfield Parts" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Honda Section */}
            <section
                id="honda"
                className="relative overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/bikefix-imgs/fix1.png")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 flex flex-col justify-center items-center py-20"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px] mb-4">
                            <img
                                src="/assets/brand-imgs/honda2.png"
                                alt="Honda"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            HONDA <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">RELIABILITY</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">The Power of Dreams</span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper lg:flex-row-reverse">


                        <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-gold/20"
                            >
                                <img src="/assets/reparts-imgs/cinematic_honda.png" alt="Honda Parts" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">Premium Engineering</span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                UNMATCHED QUALITY, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">GENUINE HONDA PARTS</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">Honda is synonymous with reliability. Our range of genuine Honda components ensures that your machine performs at its peak, providing you with peace of mind on every journey.</p>
                                <ul className="space-y-2 list-disc list-inside hover:text-gold transition-colors">
                                    <li>Precision engineered for exact fit</li>
                                    <li>Enhanced durability and performance</li>
                                    <li>Factory-certified quality standards</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Yamaha Section */}
            <section
                id="yamaha"
                className="relative overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/bikefix-imgs/fix2.png")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 flex flex-col justify-center items-center py-20"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px] mb-4">
                            <img
                                src="/assets/brand-imgs/yamaha2.png"
                                alt="Yamaha"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            YAMAHA <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">SPIRIT</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">Revs Your Heart</span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">Racing Excellence</span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                UNLEASH THE PERFORMANCE, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">YAMAHA GENUINE ACCESSORIES</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">Yamaha is built for those who crave excitement. Our curated selection of Yamaha parts delivers the performance and agility you need to dominate the road or the track.</p>
                                <ul className="space-y-2 list-disc list-inside hover:text-gold transition-colors">
                                    <li>High-performance racing components</li>
                                    <li>Advanced technological integration</li>
                                    <li>Dynamic styling and durability</li>
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
                                <img src="/assets/reparts-imgs/part5.png" alt="Yamaha Parts" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KTM Section */}
            <section
                id="ktm"
                className="relative overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/ws/WhatsApp Image 2025-12-27 at 5.38.56 PM (2).jpeg")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 flex flex-col justify-center items-center py-20"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px] mb-4">
                            <img
                                src="/assets/brand-imgs/ktm2.png"
                                alt="KTM"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            KTM <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">READY TO RACE</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">Engineering Fearless Performance</span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper lg:flex-row-reverse">


                        <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-gold/20"
                            >
                                <img src="/assets/ws/WhatsApp Image 2025-12-27 at 5.38.56 PM (3).jpeg" alt="KTM Performance" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">Aggressive Performance</span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                DOMINATE EVERY TERRAIN, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">KTM GENUINE POWERPARTS</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">KTM is for the bold. We provide authentic KTM parts that enhance the raw power and sharp handling of your machine, ensuring you're always ready to race.</p>
                                <ul className="space-y-2 list-disc list-inside hover:text-gold transition-colors">
                                    <li>Lightweight performance components</li>
                                    <li>Uncompromising durability for track & trail</li>
                                    <li>Iconic styling and precision engineering</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Kawasaki Section */}
            <section
                id="kawasaki"
                className="relative overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/ws/WhatsApp Image 2025-12-27 at 5.38.57 PM.jpeg")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 flex flex-col justify-center items-center py-20"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px] mb-4">
                            <img
                                src="/assets/brand-imgs/kawasaki2.png"
                                alt="Kawasaki"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            KAWASAKI <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">LET THE GOOD TIMES ROLL</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">Unleashing Ninja Power</span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">Superbike Mastery</span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                PRECISION MEETS POWER, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">KAWASAKI GENUINE PARTS</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">Experience the legendary performance of Kawasaki. Our range of Kawasaki parts ensures that your superbike or cruiser maintains its edge and reliability.</p>
                                <ul className="space-y-2 list-disc list-inside hover:text-gold transition-colors">
                                    <li>Cutting-edge engineering solutions</li>
                                    <li>Optimized for speed and endurance</li>
                                    <li>Premium finish and perfect fitment</li>
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
                                <img src="/assets/ws/WhatsApp Image 2025-12-27 at 5.39.05 PM (3).jpeg" alt="Kawasaki Parts" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bajaj Section */}
            <section
                id="bajaj"
                className="relative overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/ws/WhatsApp Image 2025-12-27 at 5.39.03 PM (3).jpeg")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 flex flex-col justify-center items-center py-20"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px] mb-4">
                            <img
                                src="/assets/brand-imgs/bajaj2.png"
                                alt="Bajaj"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            BAJAJ <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">THE WORLD'S FAVOURITE INDIAN</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">Efficient & Powerful Commuting</span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper lg:flex-row-reverse">


                        <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-gold/20"
                            >
                                <img src="/assets/ws/WhatsApp Image 2025-12-27 at 5.39.11 PM (3).jpeg" alt="Bajaj Spares" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">Reliable Commuting</span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                SCALE NEW HEIGHTS, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">BAJAJ GENUINE SPARES</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">Bajaj provides the perfect balance of efficiency and power. We offer genuine Bajaj spares that keep your motorcycle running smoothly and economically.</p>
                                <ul className="space-y-2 list-disc list-inside hover:text-gold transition-colors">
                                    <li>Enhanced fuel efficiency components</li>
                                    <li>Durable and long-lasting parts</li>
                                    <li>Wide availability and trusted quality</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TVS Section */}
            <section
                id="tvs"
                className="relative overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/ws/WhatsApp Image 2025-12-27 at 5.39.00 PM.jpeg")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 flex flex-col justify-center items-center py-20"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px] mb-4">
                            <img
                                src="/assets/brand-imgs/tvs2.png"
                                alt="TVS"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            TVS <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">TRACK TO ROAD</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">Racing DNA in Every Ride</span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">Racing Heritage</span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                UNCOMPROMISING AGILITY, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">TVS GENUINE PARTS</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">TVS brings racing technology to the streets. Our genuine TVS parts ensure that your machine retains its sharp handling and punchy performance.</p>
                                <ul className="space-y-2 list-disc list-inside hover:text-gold transition-colors">
                                    <li>Precision parts with racing DNA</li>
                                    <li>Enhanced reliability for daily commutes</li>
                                    <li>Factory-backed quality and performance</li>
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
                                <img src="/assets/ws/WhatsApp Image 2025-12-27 at 5.39.01 PM.jpeg" alt="TVS Parts" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section
                id="hero-moto"
                className="relative overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/ws/WhatsApp Image 2025-12-27 at 5.39.12 PM.jpeg")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 flex flex-col justify-center items-center py-20"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px] mb-4">
                            <img
                                src="/assets/brand-imgs/hero2.png"
                                alt="Hero"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            HERO <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">BE THE HERO</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">The Nation's Pride in Motion</span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper lg:flex-row-reverse">


                        <div className="flex-1 relative h-[400px] md:h-[500px] w-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="w-full h-full rounded-[2rem] overflow-hidden border-4 border-gold/20"
                            >
                                <img src="/assets/ws/WhatsApp Image 2025-12-27 at 5.39.00 PM (4).jpeg" alt="Hero Parts" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">Trusted Mobility</span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                GO THE DISTANCE, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">HERO GENUINE PARTS</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">Hero is the backbone of Indian mobility. We provide genuine Hero parts that ensure long-lasting performance and hassle-free maintenance for millions of riders.</p>
                                <ul className="space-y-2 list-disc list-inside hover:text-gold transition-colors">
                                    <li>Durability you can count on</li>
                                    <li>Easy maintenance and wide compatibility</li>
                                    <li>Original quality for total confidence</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mahindra Section */}
            <section
                id="mahindra"
                className="relative overflow-hidden border-b border-gold/10"
                style={{
                    backgroundImage: 'url("/assets/ws/WhatsApp Image 2025-12-27 at 5.39.04 PM.jpeg")',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-0 flex flex-col justify-center items-center py-20"
                    >
                        <div className="mx-4 md:mx-8 flex items-center justify-center min-w-[100px] md:min-w-[120px] mb-4">
                            <img
                                src="/assets/brand-imgs/mahindra2.png"
                                alt="Mahindra"
                                className="h-12 md:h-20 w-auto object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-gold uppercase tracking-wider mb-1">
                            MAHINDRA <span className="text-gradient text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider">RISE</span>
                        </h2>
                        <span className="text-gradient font-oswald text-sm tracking-[0.5em] uppercase block mb-2">Toughness Reimagined</span>
                        <div className="bg-gradient-to-r from-[#D4AF37] to-red-400 w-[100px] h-[5px] rounded-2xl"></div>
                    </motion.div>

                    <div className="section-wrapper">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex-1 z-10 text-left"
                        >
                            <span className="text-gold font-oswald text-sm md:text-base font-medium tracking-[0.5em] mb-4 block uppercase">Rugged Innovation</span>
                            <h2 className="text-gold text-2xl md:text-3xl lg:text-5xl font-oswald font-bold text-white leading-tight mb-8 uppercase tracking-wide">
                                BUILT TO LAST, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">MAHINDRA GENUINE COMPONENTS</span>
                            </h2>
                            <div className="space-y-6 text-white/70">
                                <p className="text-lg">Mahindra stands for ruggedness and innovation. Our range of genuine Mahindra components is designed to withstand the toughest conditions while delivering peak performance.</p>
                                <ul className="space-y-2 list-disc list-inside hover:text-gold transition-colors">
                                    <li>Robust construction for extreme durability</li>
                                    <li>Advanced engineering for reliable performance</li>
                                    <li>Original spares for long-term value</li>
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
                                <img src="/assets/ws/WhatsApp Image 2025-12-27 at 5.39.05 PM (1).jpeg" alt="Mahindra Parts" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
