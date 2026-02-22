"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/assets/Pharmaceuticals.jpeg", title: "Manufacturing Unit" },
  { src: "/assets/images/infra/infra2.png", title: "Quality Lab" },
  { src: "/assets/images/infra/infra3.png", title: "Production Floor" },
  { src: "/assets/images/infra/infra4.png", title: "R&D Facility" },
  { src: "/assets/images/infra/infra5.png", title: "Packaging Area" },
  { src: "/assets/images/infra/infra6.png", title: "Warehouse" },
  { src: "/assets/quality-banner.jpeg", title: "Manufacturing Unit" },
  { src: "/assets/Global1.jpeg", title: "Quality Lab" },
];

export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
<section className="relative overflow-hidden
                    pt-24 sm:pt-28 md:pt-32
                    pb-24 sm:pb-26 md:pb-28">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/assets/images/infra/infra5.png')" }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
    <div
      className="bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl
                 border border-white/30
                 px-5 sm:px-8
                 py-7 sm:py-10
                 shadow-xl"
    >
      <h1
        className="text-3xl sm:text-4xl md:text-6xl
                   font-extrabold text-[#291684]"
      >
        Our Infrastructure Gallery
      </h1>

      <p
        className="mt-3 sm:mt-5
                   text-white/90
                   text-base sm:text-lg md:text-xl
                   leading-relaxed"
      >
        A glimpse into our world-class facilities and manufacturing excellence.
      </p>
    </div>
  </div>

  {/* Wave */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="w-full h-[70px] sm:h-[85px] md:h-[100px]"
    >
      <path
        d="M0,40 C360,90 720,10 1080,50 1260,70 1440,40 1440,40
           L1440,100 L0,100 Z"
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
              className="relative overflow-hidden rounded-2xl group break-inside-avoid shadow-lg"
            >
              <Image
                src={img.src}
                alt={img.title}
                width={600}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white font-semibold text-lg">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}