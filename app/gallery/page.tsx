"use client";

import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { src: "/assets/gallery/1.png", title: "" },
  { src: "/assets/gallery/2.png", title: "" },
  { src: "/assets/gallery/3.png", title: "" },
  { src: "/assets/gallery/4.png", title: "" },
  { src: "/assets/gallery/5.png", title: "" },
  { src: "/assets/gallery/6.png", title: "" },
  { src: "/assets/gallery/7.png", title: "" },
  { src: "/assets/gallery/8.png", title: "" },
  { src: "/assets/gallery/9.png", title: "" },
  { src: "/assets/gallery/10.png", title: "" },
  { src: "/assets/gallery/11.png", title: "" },
  { src: "/assets/gallery/12.png", title: "" },
  { src: "/assets/gallery/13.png", title: "" },
  { src: "/assets/gallery/14.png", title: "" },
  { src: "/assets/gallery/15.png", title: "" },
  { src: "/assets/gallery/16.png", title: "" },
  { src: "/assets/gallery/17.png", title: "" },
  { src: "/assets/gallery/18.png", title: "" },
  { src: "/assets/gallery/19.png", title: "" },
  { src: "/assets/gallery/20.png", title: "" },
  { src: "/assets/gallery/21.png", title: "" },
  { src: "/assets/gallery/22.png", title: "" },
  { src: "/assets/gallery/23.png", title: "" },
  { src: "/assets/gallery/24.png", title: "" },
  { src: "/assets/gallery/25.png", title: "" },
  { src: "/assets/gallery/26.png", title: "" },
  { src: "/assets/gallery/27.png", title: "" },
  { src: "/assets/gallery/28.png", title: "" },
  { src: "/assets/gallery/29.png", title: "" },
  { src: "/assets/gallery/30.png", title: "" },
  { src: "/assets/gallery/31.png", title: "" },
  { src: "/assets/gallery/32.png", title: "" },
  { src: "/assets/gallery/33.png", title: "" },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setDirection(null);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setDirection(null);
  };

  const navigate = useCallback(
    (dir: "left" | "right") => {
      if (lightboxIndex === null || isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);

      setTimeout(() => {
        setLightboxIndex((prev) => {
          if (prev === null) return null;
          if (dir === "right") return (prev + 1) % galleryImages.length;
          return (prev - 1 + galleryImages.length) % galleryImages.length;
        });
        setIsAnimating(false);
      }, 250);
    },
    [lightboxIndex, isAnimating]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") navigate("right");
      if (e.key === "ArrowLeft") navigate("left");
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, navigate]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-26 md:pb-28">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/products.png')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Our Infrastructure Gallery
          </h1>
          <p className="mt-3 sm:mt-5 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md">
            A glimpse into our world-class facilities and manufacturing excellence.
          </p>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-[70px] sm:h-[85px] md:h-[100px]"
          >
            <path
              d="M0,40 C360,90 720,10 1080,50 1260,70 1440,40 1440,40 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid shadow-lg cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.title || `Gallery image ${index + 1}`}
                width={600}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Zoom Icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6"
                    />
                  </svg>
                </div>
              </div>

              {/* Caption */}
              {img.title && (
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-semibold text-lg">{img.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
            <span className="text-white/70 text-sm font-medium tracking-widest bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
              {lightboxIndex + 1} / {galleryImages.length}
            </span>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-20 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-2.5 transition-all duration-200"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow — always visible, vertically centered */}
          <button
            className="absolute left-2 sm:left-6 z-20 text-white/90 hover:text-white bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              minWidth: 48,
              minHeight: 48,
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate("left");
            }}
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow — always visible, vertically centered */}
          <button
            className="absolute right-2 sm:right-6 z-20 text-white/90 hover:text-white bg-white/15 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 flex items-center justify-center"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              width: 48,
              height: 48,
              minWidth: 48,
              minHeight: 48,
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate("right");
            }}
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Image — padded so it never hides behind arrows */}
          <div
            className="relative z-10 flex items-center justify-center w-full h-full"
            style={{ paddingLeft: 64, paddingRight: 64, paddingTop: 48, paddingBottom: 80 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].src}
              alt={
                galleryImages[lightboxIndex].title ||
                `Gallery image ${lightboxIndex + 1}`
              }
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-2xl"
              style={{
                maxHeight: "calc(100vh - 128px)",
                animation: isAnimating
                  ? direction === "right"
                    ? "slideOutLeft 0.25s ease forwards"
                    : "slideOutRight 0.25s ease forwards"
                  : "slideIn 0.3s ease forwards",
              }}
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center px-4">
            <div className="flex gap-1.5 overflow-x-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg scrollbar-hide py-1">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(i);
                  }}
                  className={`flex-shrink-0 rounded-md overflow-hidden transition-all duration-200 border-2 ${
                    i === lightboxIndex
                      ? "border-white scale-105 opacity-100"
                      : "border-transparent opacity-40 hover:opacity-70"
                  }`}
                  style={{ width: 44, height: 32 }}
                  aria-label={`Go to image ${i + 1}`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Keyframe animations */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-40px);
          }
        }
        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(40px);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}
