"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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

type AnimDir = "left" | "right" | null;

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [animDir, setAnimDir] = useState<AnimDir>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setAnimDir(null);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setAnimDir(null);
  };

  const navigate = useCallback(
    (dir: "left" | "right") => {
      if (lightboxIndex === null || isAnimating) return;
      setIsAnimating(true);
      setAnimDir(dir);

      setTimeout(() => {
        setLightboxIndex((prev) => {
          if (prev === null) return null;
          return dir === "right"
            ? (prev + 1) % galleryImages.length
            : (prev - 1 + galleryImages.length) % galleryImages.length;
        });
        setAnimDir(null);
        setIsAnimating(false);
      }, 260);
    },
    [lightboxIndex, isAnimating]
  );

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

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 44) {
      navigate(dx < 0 ? "right" : "left");
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const imgAnimClass = animDir === "right"
    ? "lb-exit-left"
    : animDir === "left"
      ? "lb-exit-right"
      : "lb-enter";

  return (
    <main className="bg-white">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-26 md:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/products.png')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Our Infrastructure Gallery
          </h1>
          <p className="mt-3 sm:mt-5 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md">
            A glimpse into our world-class facilities and manufacturing excellence.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[70px] sm:h-[85px] md:h-[100px]">
            <path d="M0,40 C360,90 720,10 1080,50 1260,70 1440,40 1440,40 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ═══════════════ GALLERY GRID ═══════════════ */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
              {img.title && (
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-semibold text-lg">{img.title}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ LIGHTBOX ═══════════════ */}
      {lightboxIndex !== null && (
        <div
          className="lb-root"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Backdrop — tap to close */}
          <div className="lb-backdrop" onClick={closeLightbox} />

          {/* Counter */}
          <div className="lb-counter">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>

          {/* Close */}
          <button className="lb-close" onClick={closeLightbox} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left arrow */}
          <button className="lb-arrow lb-arrow-left" onClick={() => navigate("left")} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image zone — this is what fills the screen */}
          <div className="lb-img-zone">
            <img
              key={lightboxIndex}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].title || `Gallery image ${lightboxIndex + 1}`}
              className={`lb-img ${imgAnimClass}`}
              draggable={false}
            />
          </div>

          {/* Right arrow */}
          <button className="lb-arrow lb-arrow-right" onClick={() => navigate("right")} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div className="lb-thumbs-wrap">
            <div className="lb-thumbs">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  className={`lb-thumb ${i === lightboxIndex ? "lb-thumb-active" : ""}`}
                  onClick={() => openLightbox(i)}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={img.src} alt="" draggable={false} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ LIGHTBOX STYLES ═══════════════ */}
      <style jsx global>{`

        /* ── Root: CSS Grid fills the entire viewport ── */
        .lb-root {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.96);
}


        /* Invisible full-screen tap target for closing */
       .lb-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  cursor: zoom-out;
}

        /* Counter pill — row 1, col 2 */
        .lb-counter {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  font-size: 13px;
  color: rgba(255,255,255,0.75);
  background: rgba(255,255,255,0.1);
  border-radius: 999px;
  padding: 5px 14px;
}

        /* Close button — absolute top-right */
  .lb-close {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99999; 
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 10px;
  display: flex; /* Ensure it's visible */
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
        .lb-close:hover  { background: rgba(255,255,255,0.26); }
        .lb-close:active { transform: scale(0.85); }

        /* Arrows — row 2, col 1 or 3 */
       .lb-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}
        .lb-arrow-left {
  left: 16px;
}

.lb-arrow-right {
  right: 16px;
}
        .lb-arrow:hover  { background: rgba(255,255,255,0.26); }
        .lb-arrow:active { transform: translateY(-50%) scale(0.85); }

        /* ── Image zone: row 2, col 2 — the magic is here ── */
     .lb-img-zone {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

        /* The image fills the zone, keeps its ratio, no cropping */
       .lb-img {
  pointer-events: auto; 
}

        /* ── Animations ── */
        @keyframes lb-enter-kf {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        .lb-enter {
          animation: lb-enter-kf 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes lb-exit-left-kf {
          from { opacity: 1; transform: translateX(0) scale(1); }
          to   { opacity: 0; transform: translateX(-4%) scale(0.97); }
        }
        .lb-exit-left {
          animation: lb-exit-left-kf 0.26s cubic-bezier(0.55, 0, 1, 0.45) forwards;
        }

        @keyframes lb-exit-right-kf {
          from { opacity: 1; transform: translateX(0) scale(1); }
          to   { opacity: 0; transform: translateX(4%) scale(0.97); }
        }
        .lb-exit-right {
          animation: lb-exit-right-kf 0.26s cubic-bezier(0.55, 0, 1, 0.45) forwards;
        }

        /* ── Thumbnail strip: row 3, all columns ── */
       .lb-thumbs-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  display: flex;
  justify-content: center;
  padding: 10px 0;
  background: rgba(0,0,0,0.4);
}
      .lb-thumbs {
  display: flex;
  gap: 6px;
  overflow-x: auto;
}
        .lb-thumbs::-webkit-scrollbar { display: none; }

       .lb-thumb {
  width: 50px;
  height: 36px;
  opacity: 0.5;
}
        .lb-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .lb-thumb:hover      { opacity: 0.65; transform: scale(1.07); }
        
.lb-thumb-active {
  opacity: 1;
  border: 2px solid #fff;
}
        /* ── Tablet ── */
        @media (min-width: 640px) {
          .lb-root {
            grid-template-columns: 72px 1fr 72px;
            grid-template-rows: 64px 1fr 84px;
          }
          .lb-arrow { width: 52px; height: 52px; }
          .lb-thumb { width: 52px; height: 38px; }
        }

        /* ── Desktop ── */
        @media (min-width: 1024px) {
          .lb-root {
            grid-template-columns: 96px 1fr 96px;
          }
          .lb-img { border-radius: 12px; }
          .lb-thumb { width: 58px; height: 42px; }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .lb-img { animation: none !important; opacity: 1 !important; transform: none !important; }
        }

        @media (max-width: 640px) {
  .lb-close {
    top: 15px;      /* Mobile లో కొంచెం పైకి */
    right: 15px;    /* Mobile లో సైడ్ కి */
    width: 40px;    /* Specific size for mobile */
    height: 40px;
    background: rgba(0, 0, 0, 0.8) !important; /* Mobile లో క్లియర్ గా కనిపించడానికి dark background */
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  /* Image mobile లో button కిందకి వెళ్లకుండా కొంచెం తగ్గించడం */
  .lb-img {
    max-height: 70vh !important; 
    object-fit: contain;
  }
    .lb-close svg {
    stroke: #ffffff !important;
    width: 26px; /* Icon size slightly bigger for mobile visibility */
    height: 26px;
  }
  
  /* Image zone adjustment for mobile */
  .lb-img-zone {
    z-index: 10; /* Button (99999) కన్నా తక్కువ ఉండాలి */
  }
}
      `}</style>
    </main>
  );
}