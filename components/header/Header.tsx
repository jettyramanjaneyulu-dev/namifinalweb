"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { useEffect } from "react";

/* ------------------ ANIMATED MENU ITEM ------------------ */
// const AnimatedMenuItem = ({
//   children,
//   onClick,
//   mobile = false,
// }: {
//   children: React.ReactNode;
//   onClick?: () => void;
//   mobile?: boolean;
// }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="relative overflow-hidden px-2 py-1
//         uppercase text-sm font-bold tracking-wider
//         cursor-pointer text-[#014d8b]"
//     >

const AnimatedMenuItem = ({
  children,
  onClick,
  mobile = false,
  href,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  mobile?: boolean;
  href?: string;
}) => {
  const router = useRouter();

  return (
    <button
      onMouseEnter={() => href && router.prefetch(href)}
      onClick={onClick}
      className="relative overflow-hidden px-2 py-1 uppercase text-sm font-bold tracking-wider cursor-pointer text-[#014d8b]"
    >
      <motion.span
        initial={mobile ? { y: "-100%" } : { x: "-100%" }}
        whileHover={mobile ? { y: "100%" } : { x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0
          bg-gradient-to-r from-[#C93A7C] via-[#ff7ab6] to-[#C93A7C]
          opacity-30"
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default function Header() {
  const router = useRouter();
useEffect(() => {
  router.prefetch("/about");
  router.prefetch("/products");
  router.prefetch("/products/list");
  router.prefetch("/quality");
  router.prefetch("/infrastructure");
  router.prefetch("/career");
  router.prefetch("/gallery");
  router.prefetch("/reach-us");
  router.prefetch("/blog");
  router.prefetch("/admin/login");
}, [router]);
  const [transitioning, setTransitioning] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const navigateWithEffect = (href: string) => {
  if (transitioning) return; // prevent double click

  setTransitioning(true);
  setMobileMenuOpen(false);
  setMobileProductsOpen(false);

  // wait for animation to finish
  setTimeout(() => {
    router.push(href);
  }, 350);

  // unmount animation after redirect
  setTimeout(() => {
    setTransitioning(false);
  }, 2400);
};



  return (
    <>
      {/* ================= NAVBAR ================= */}
      
      <nav
        className="
          sticky top-0 z-40 w-full
          bg-white/10
          backdrop-blur-xl backdrop-saturate-150
          border-b border-white/20
          shadow-lg
          transition-all duration-300
        "
      >
        {/* <div className="relative px-8 flex justify-between items-center h-[76px]"> */}
        <div className="relative px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[76px]">
          {/* LEFT */}
          <div className="flex items-center gap-12">
            <button
              onClick={() => navigateWithEffect("/")}
              className="relative w-36 h-26"
            >
              <img
                src="/assets/footer-n-logo.png"
                alt="Logo"
                
                className="h-full  object-contain"
              />
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
             <AnimatedMenuItem onClick={() => navigateWithEffect("/about")}> About Us </AnimatedMenuItem>

              <div className="relative group">
                <div className="flex items-center gap-1">
                  <AnimatedMenuItem
                    onClick={() => navigateWithEffect("/products")}
                  >
                    Products
                  </AnimatedMenuItem>
                  <ChevronDown
                    size={16}
                    className="text-[#014d8b] transition-transform duration-300 group-hover:rotate-180"
                  />
                </div>

                <div className="absolute left-0 top-full mt-4 opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-xl w-60 py-3">
                    <button
                      onClick={() => navigateWithEffect("/products/list")}
                      className="block w-full px-5 py-3 text-left
                        text-sm font-semibold text-[#014d8b]
                        hover:bg-white/60"
                    >
                      Products List
                    </button>
                  </div>
                </div>
              </div>

              <AnimatedMenuItem onClick={() => navigateWithEffect("/quality")}>
                Quality
              </AnimatedMenuItem>

              <AnimatedMenuItem onClick={() => navigateWithEffect("/infrastructure")}>
                Infrastructure
              </AnimatedMenuItem>

              <AnimatedMenuItem onClick={() => navigateWithEffect("/career")}>
                Career
              </AnimatedMenuItem>

              <AnimatedMenuItem onClick={() => navigateWithEffect("/gallery")}>
                Gallery
              </AnimatedMenuItem>

              <AnimatedMenuItem onClick={() => navigateWithEffect("/reach-us")}>
                Reach Us
              </AnimatedMenuItem>
              <AnimatedMenuItem onClick={() => navigateWithEffect("/blog")}>
                Blog
              </AnimatedMenuItem>
              <AnimatedMenuItem onClick={() => navigateWithEffect("/admin/login")}>
                Admin
              </AnimatedMenuItem>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 px-7 py-3 rounded-full
                bg-gradient-to-r from-[#18324d] via-[#0077b6] to-[#00b4d8]
                text-white font-semibold text-sm shadow-lg
                hover:scale-105 transition"
            >
              Get Quote Now <ArrowRight size={16} />
            </Link>

            <button
              className="lg:hidden text-[#014d8b]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      className="
        fixed top-[76px] w-full z-50 lg:hidden
        bg-white/10
        backdrop-blur-2xl backdrop-saturate-150
        border-t border-white/20
        shadow-xl
      "
    >
            <div className="flex flex-col items-center text-center
              px-6 py-8 space-y-7
              text-[#014d8b] font-bold uppercase">

              <AnimatedMenuItem mobile onClick={() => navigateWithEffect("/about")}>
                About Us
              </AnimatedMenuItem>

              {/* PRODUCTS (MOBILE) */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigateWithEffect("/products")}
                    className="font-bold uppercase text-[#014d8b]"
                  >
                    Products
                  </button>

                  <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
                    <ChevronDown
                      size={18}
                      className={`text-[#014d8b] transition-transform ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      style={{ transformOrigin: "top" }}
                      className="overflow-hidden flex flex-col gap-3 text-sm mt-2"
                    >
                      <AnimatedMenuItem
                        mobile
                        onClick={() => navigateWithEffect("/products/list")}
                      >
                        Products List
                      </AnimatedMenuItem>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatedMenuItem mobile onClick={() => navigateWithEffect("/quality")}>
                Quality
              </AnimatedMenuItem>

              <AnimatedMenuItem mobile onClick={() => navigateWithEffect("/infrastructure")}>
                Infrastructure
              </AnimatedMenuItem>

              <AnimatedMenuItem mobile onClick={() => navigateWithEffect("/career")}>
                Career
              </AnimatedMenuItem>

              <AnimatedMenuItem mobile onClick={() => navigateWithEffect("/gallery")}>
                Gallery
              </AnimatedMenuItem>

              <AnimatedMenuItem mobile onClick={() => navigateWithEffect("/reach-us")}>
                Reach Us
              </AnimatedMenuItem>
              <AnimatedMenuItem mobile onClick={() => navigateWithEffect("/blog")}>
                Blog
              </AnimatedMenuItem>
               <AnimatedMenuItem mobile onClick={() => navigateWithEffect("/admin/login")}>
                Admin
              </AnimatedMenuItem>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 inline-flex items-center gap-2
                  px-8 py-4 rounded-full
                  bg-gradient-to-r from-[#18324d] via-[#0077b6] to-[#00b4d8]
                  text-white font-bold"
              >
                Get Quote Now <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {transitioning && <PageTransition />}

    </>
  );
}
