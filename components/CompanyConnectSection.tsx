"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ================= COMPANY / CONNECT ================= */
export default function CompanyConnectSection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="relative py-24 px-6 overflow-hidden">

                {/* Background Glow */}
                {/* <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-300/30 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-purple-300/30 rounded-full blur-[120px]" />
                </div> */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="relative border border-white/40 rounded-[32px] shadow-2xl overflow-hidden">

                        {/* Accent Strip */}
                        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-pink-500 to-purple-600" />

                        <div className="p-10 md:p-14 text-center">

                            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-700">
                                Let’s Connect
                            </span>

                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">
                                NAMI LIFESCIENCES PVT. LTD
                            </h2>

                            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                We welcome collaborations, strategic partnerships, and business
                                inquiries. Our team is ready to support your pharmaceutical and
                                nutraceutical manufacturing needs.
                            </p>

                            {/* CTA */}
                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={() => setOpen(true)}
                                    className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Get in Touch
                                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-white/10 transition" />
                                </button>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ================= POPUP CONTACT FORM ================= */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md px-4"
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            transition={{ duration: 0.4 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-lg rounded-[28px] bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl p-8 md:p-10"
                        >
                            {/* Close */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-gray-600 hover:text-pink-600"
                            >
                                <X size={22} />
                            </button>

                            <h3 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
                                Get in Touch
                            </h3>

                            <form className="space-y-5">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-5 py-3 rounded-xl border border-gray-300
             placeholder:text-gray-500
             focus:ring-2 focus:ring-pink-400 outline-none bg-white/90"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-5 py-3 rounded-xl border border-gray-300
             placeholder:text-gray-500
             focus:ring-2 focus:ring-pink-400 outline-none bg-white/90"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-5 py-3 rounded-xl border border-gray-300
             placeholder:text-gray-500
             focus:ring-2 focus:ring-pink-400 outline-none bg-white/90"
                                />

                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-5 py-3 rounded-xl border border-gray-300
             placeholder:text-gray-500
             focus:ring-2 focus:ring-pink-400 outline-none bg-white/90 resize-none"
                                />

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}