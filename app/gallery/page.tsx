"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/assets/gallery/1.png", title: "Manufacturing Unit" },
  { src: "/assets/gallery/2.png", title: "Quality Lab" },
  { src: "/assets/gallery/3.png", title: "Production Floor" },
  { src: "/assets/gallery/4.png", title: "R&D Facility" },
  { src: "/assets/gallery/5.png", title: "Packaging Area" },
  { src: "/assets/gallery/6.png", title: "Warehouse" },
  { src: "/assets/gallery/7.png", title: "Manufacturing Unit" },
  { src: "/assets/gallery/8.png", title: "Quality Lab" },
  { src: "/assets/gallery/9.png", title: "Manufacturing Unit" },
  { src: "/assets/gallery/10.png", title: "Quality Lab" },
  { src: "/assets/gallery/11.png", title: "Production Floor" },
  { src: "/assets/gallery/12.png", title: "R&D Facility" },
  { src: "/assets/gallery/13.png", title: "Packaging Area" },
  { src: "/assets/gallery/14.png", title: "Warehouse" },
  { src: "/assets/gallery/15.png", title: "Manufacturing Unit" },
  { src: "/assets/gallery/16.png", title: "Quality Lab" },
  { src: "/assets/gallery/17.png", title: "Manufacturing Unit" },
  { src: "/assets/gallery/18.png", title: "Quality Lab" },
  { src: "/assets/gallery/19.png", title: "Production Floor" },
  { src: "/assets/gallery/20.png", title: "R&D Facility" },
  { src: "/assets/gallery/21.png", title: "Packaging Area" },
  { src: "/assets/gallery/22.png", title: "Warehouse" },
  { src: "/assets/gallery/23.png", title: "Manufacturing Unit" },
  { src: "/assets/gallery/24.png", title: "Quality Lab" },
  { src: "/assets/gallery/25.png", title: "Manufacturing Unit" },
  { src: "/assets/gallery/26.png", title: "Quality Lab" },
  { src: "/assets/gallery/27.png", title: "Production Floor" },
  { src: "/assets/gallery/28.png", title: "R&D Facility" },
  { src: "/assets/gallery/29.png", title: "Packaging Area" },
  { src: "/assets/gallery/30.png", title: "Warehouse" },
  { src: "/assets/gallery/31.png", title: "Manufacturing Unit" },
  { src: "/assets/gallery/32.png", title: "Quality Lab" },
  { src: "/assets/gallery/33.png", title: "Manufacturing Unit" },
];

export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
<section
  className="
    relative overflow-hidden
    pt-24 sm:pt-28 md:pt-32
    pb-24 sm:pb-26 md:pb-28
  "
>
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/assets/images/products.png')" }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
    <h1
      className="
        text-3xl sm:text-4xl md:text-6xl
        font-extrabold
        text-white
        drop-shadow-lg
      "
    >
      Our Infrastructure Gallery
    </h1>

    <p
      className="
        mt-3 sm:mt-5
        text-white/90
        text-base sm:text-lg md:text-xl
        leading-relaxed
        drop-shadow-md
      "
    >
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
              <img
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