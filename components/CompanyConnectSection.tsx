"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CompanyConnectSection() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(form.phone)) newErrors.phone = "Enter valid 10-digit phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter valid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 2000);
  };


  const inputClass = "w-full px-5 py-3 rounded-xl border border-gray-300 text-gray-900 text-base font-medium placeholder:text-gray-900 focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none bg-white";


  return (
    <>
      <section className="relative py-24 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative border border-white/40 rounded-[32px] shadow-2xl overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-pink-500 to-purple-600" />
            <div className="p-10 md:p-14 text-center">
              <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-700">
                Let's Connect
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">
                NAMI LIFESCIENCES PVT. LTD
              </h2>
              <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We welcome collaborations, strategic partnerships, and business
                inquiries. Our team is ready to support your pharmaceutical and
                nutraceutical manufacturing needs.
              </p>
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

      {/* ================= POPUP ================= */}
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
              className="relative w-full max-w-lg rounded-[28px] bg-white shadow-2xl p-8 md:p-10"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-pink-600"
              >
                <X size={22} />
              </button>

              <h3 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
                Get in Touch
              </h3>

              {submitted ? (
                <div className="text-center py-10">
                  <p className="text-2xl font-bold text-green-600">✓ Submitted!</p>
                  <p className="text-gray-500 mt-2">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 pl-1">{errors.name}</p>}
                  </div>

                  {/* Phone — numbers only */}
                  <div>
                  // ✅ FIXED phone input — blocks letters on keypress too
<input
  type="tel"
  placeholder="Phone Number (10 digits)"
  value={form.phone}
  maxLength={10}
  onKeyPress={(e) => {
    if (!/[0-9]/.test(e.key)) e.preventDefault(); // ✅ block non-numbers
  }}
  onChange={(e) => {
    const val = e.target.value.replace(/\D/g, "");
    setForm({ ...form, phone: val });
  }}
  className={inputClass}
/>
                    {errors.phone && <p className="text-red-500 text-xs mt-1 pl-1">{errors.phone}</p>}
                  </div>

                  {/* Email — must contain @ */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address (example@gmail.com)"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 pl-1">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1 pl-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
                  >
                    Submit
                  </button>

                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}