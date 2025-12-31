import React from 'react';
import { useCart } from '../context/CartContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft } from 'react-icons/fi';

export function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

    const handleWhatsAppCheckout = () => {
        if (cartItems.length === 0) return;

        const productList = cartItems.map((item, index) =>
            `${index + 1}. ${item.title} (Qty: ${item.quantity})`
        ).join('%0A'); // %0A is URL encoded newline

        const message = `*Hi, I would like to place an order for the following items:*%0A%0A${productList}%0A%0A*Please confirm availability and total price.*`;

        const whatsappUrl = `https://wa.me/918855989211?text=${message}`; // No need to encode twice if we manually construct safe parts, but message needs encoding
        // Actually best practice is to formulate the string and then encodeComponent the whole thing.
        // Let's redo:
        const rawMessage = `Hi, I would like to place an order for the following items:\n\n${cartItems.map((item, i) => `${i + 1}. ${item.title} (Qty: ${item.quantity})`).join('\n')}\n\nPlease confirm availability and total price.`;

        window.open(`https://wa.me/918855989211?text=${encodeURIComponent(rawMessage)}`, '_blank');
    };

    return (
        <div className="bg-black min-h-screen text-white font-oswald flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20 container mx-auto px-4 md:px-8">
                <div className="mb-10 flex items-center gap-4">
                    <a href="/collection" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-black transition-colors">
                        <FiArrowLeft size={24} />
                    </a>
                    <h1 className="text-4xl md:text-6xl font-bold uppercase text-white">
                        Your <span className="text-gold">Cart</span>
                    </h1>
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20 bg-[#0a0a0a] rounded-3xl border border-white/5">
                        <div className="text-6xl mb-6">🛒</div>
                        <h2 className="text-2xl font-bold mb-4 uppercase text-white/40">Your cart is empty</h2>
                        <a href="/collection" className="inline-block bg-gold text-black px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-white transition-all">
                            Start Shopping
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-6">
                            <AnimatePresence>
                                {cartItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 flex gap-6 items-center group hover:border-gold/30 transition-colors relative overflow-hidden"
                                    >
                                        {/* Image */}
                                        <div className="w-24 h-24 bg-black rounded-xl p-2 shrink-0 border border-white/5">
                                            <img
                                                src={item.nobg || item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-grow min-w-0">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <p className="text-gold text-[10px] uppercase tracking-widest mb-1">{item.category}</p>
                                                    <h3 className="text-xl font-bold uppercase truncate pr-4">{item.title}</h3>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="font-roboto text-gray-400 text-sm">
                                                    {item.price ? <span className="text-white font-bold text-lg">{item.price}</span> : "Price on Request"}
                                                </div>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-4 bg-white/5 rounded-full px-4 py-1.5 border border-white/5">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="hover:text-gold transition-colors"
                                                    >
                                                        <FiMinus size={14} />
                                                    </button>
                                                    <span className="text-sm font-mono w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="hover:text-gold transition-colors"
                                                    >
                                                        <FiPlus size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="absolute top-4 right-4 text-white/20 hover:text-red-500 transition-colors p-2"
                                        >
                                            <FiTrash2 size={20} />
                                        </button>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 sticky top-32">
                                <h3 className="text-2xl font-bold uppercase mb-8 border-b border-white/10 pb-4">Order Summary</h3>

                                <div className="space-y-4 mb-8 font-roboto text-sm">
                                    <div className="flex justify-between text-white/60">
                                        <span>Total Items</span>
                                        <span className="text-white">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                                    </div>
                                    <div className="flex justify-between text-white/60">
                                        <span>Status</span>
                                        <span className="text-green-400">In Stock</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleWhatsAppCheckout}
                                    className="w-full bg-gold text-black font-bold uppercase py-4 rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2 tracking-widest text-sm"
                                >
                                    <span>Checkout on WhatsApp</span>
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </button>
                                <p className="text-xs text-center mt-4 text-white/30">
                                    Secure Checkout via WhatsApp. <br /> We will confirm your order details instantly.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
