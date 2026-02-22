"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, Download, X, PackageSearch } from "lucide-react";
import { motion } from "framer-motion";

/* ================= TYPES ================= */

export type ProductGroup = "PHARMA" | "COMBO" | "NUTRA";

export type Product = {
  name: string;
  strength: string;
  category: string;
  group: ProductGroup;
};

/* ================= DATA ================= */

// PHARMA PRODUCTS
const products: Product[] = 
[
  {
    name: "Aceclofenac SR Pellets",
    strength: "70%, 60%, 50%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Atorvastatin Pellets",
    strength: "7.5%, 10%, 15%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Aspirin EC Pellets",
    strength: "65%, 45%",
    category: "EC",
    group: "PHARMA",
  },
  {
    name: "Apremilast Pellets",
    strength: "40%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Ambroxol HCl SR Pellets",
    strength: "35%, 30%, 20%, 18.75%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Alpha Lipoic Acid Pellets",
    strength: "65%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Budesonide DR Pellets",
    strength: "0.88%, 0.50%",
    category: "DR",
    group: "PHARMA",
  },
  {
    name: "Clopidogrel Pellets",
    strength: "50%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Ciprofloxacin Taste Masked Granules",
    strength: "65%",
    category: "Taste Masked",
    group: "PHARMA",
  },
  {
    name: "Cinitapride SR Pellets",
    strength: "1.5%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Chlorpheniramine Maleate Pellets",
    strength: "1.5%, 3.5%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Cetirizine Pellets",
    strength: "10%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Dutasteride Pellets",
    strength: "0.5%, 0.25%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Doxycycline Pellets",
    strength: "41%, 60%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Domperidone SR Pellets",
    strength: "7.5%, 8.5%, 20%, 22.5%, 30%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Dimethyl Fumarate Pellets",
    strength: "50%, 55%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Diclofenac Sodium SR Pellets",
    strength: "33%, 35%, 40%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Dexlansoprazole Pellets",
    strength: "8.5%, 11.2%, 15%, 17%, 20%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Dexlansoprazole Dual Delayed Release Pellets",
    strength: "15%, 22.5%",
    category: "DDR",
    group: "PHARMA",
  },
  {
    name: "Dabigatran Pellets",
    strength: "35%, 40%, 43%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Duloxetine HCl EC Pellets",
    strength: "20%",
    category: "EC",
    group: "PHARMA",
  },
  {
    name: "Esomeprazole EC Pellets",
    strength: "8.5%, 15%, 22.5%",
    category: "EC",
    group: "PHARMA",
  },
  {
    name: "Esomeprazole EC MUPS",
    strength: "15%, 22.5%",
    category: "MUPS",
    group: "PHARMA",
  },
  {
    name: "Flunarizine HCl Pellets",
    strength: "5%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Fexofenadine HCl Pellets",
    strength: "60%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Ferrous Sulphate SR Pellets",
    strength: "60%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Fenofibrate SR Pellets",
    strength: "66.23%, 75%",
    category: "SR",
    group: "PHARMA",
  },
  
  {
    name: "Itraconazole Pellets",
    strength: "22%, 40%, 44%",
    category: "IR",
    group: "PHARMA",
  },
   {
    name: "Indomethacin SR Pellets ",
    strength: "27.5%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Ketoprofen Pellets",
    strength: "50%, 60%, 65%, 70%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Lansoprazole EC Pellets",
    strength: "6.7%, 8.5%, 10%, 11.2%, 15%",
    category: "EC",
    group: "PHARMA",
  },
  {
    name: "Lansoprazole EC MUPS",
    strength: "10%, 22.5%",
    category: "MUPS",
    group: "PHARMA",
  },
  {
    name: "Galantamine Pellets",
    strength: "8%",
    category: "IR",
    group: "PHARMA",
  },

   {
    name: "Ilaprazole Pellets",
    strength: "8%",
    category: "IR",
    group: "PHARMA",
  },

  {
    name: "Linaclotide Pellets",
    strength: "72 mcg, 145 mcg, 290 mcg",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Mesalamine Pellets",
    strength: "60%, 90%, 96%",
    category: "IR",
    group: "PHARMA",
  },
   {
    name: "Methylphenidate ER Pellets ",
    strength: "11%, 40%, 60%, 80%",
    category: "ER",
    group: "PHARMA",
  },
  {
    name: "Memantine SR Pellets ",
    strength: "14%",
    category: "ER",
    group: "PHARMA",
  },
  {
    name: "Thiocolchicoside Pellets",
    strength: "4%, 8%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Tolterodine Pellets",
    strength: "1.5%",
    category: "IR",
    group: "PHARMA",
  },
   {
    name: "Mesalamine Pellets",
    strength: "60%, 90%, 96%",
    category: "IR",
    group: "PHARMA",
  },
   {
    name: "Metoprolol SR Pellets",
    strength: "66%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Metformin HCl DC Granules",
    strength: "90%",
    category: "DC",
    group: "PHARMA",
  },
  {
    name: "Nicardipine Pellets",
    strength: "22%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Nifedipine ER Pellets",
    strength: "3.5%, 11%",
    category: "ER",
    group: "PHARMA",
  },
  {
    name: "Nitroglycerine Pellets",
    strength: "1.4%, 2.5%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Omeprazole EC Pellets",
    strength: "20%, 22.5%",
    category: "EC",
    group: "PHARMA",
  },
  {
    name: "Pantoprazole EC MUPS",
    strength: "8.5%, 15%, 22.5%, 30%",
    category: "MUPS",
    group: "PHARMA",
  },
  {
    name: "Orlistat Pellets",
    strength: "50%, 60%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Pancreatin Pellets",
    strength: "60%, 70%",
    category: "IR",
    group: "PHARMA",
  },
   {
    name: "Phenylephrine HCl SR Pellets ",
    strength: "10%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Potassium Chloride SR Pellets ",
    strength: "88%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Propranolol HCl SR Pellets",
    strength: "20%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Rabeprazole Sodium EC Pellets",
    strength: "8.5%, 10%, 11.2% 15%, 20%, 22%",
    category: "EC",
    group: "PHARMA",
  },
  {
    name: "Rosuvastatin Pellets ",
    strength: "7.5%, 10%, 15%, 20%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Sertraline IR Pellets ",
    strength: "20%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Tacrolimus IR Pellets  ",
    strength: "0.5%, 1.5%",
    category: "IR",
    group: "PHARMA",
  },
  {
    name: "Tamsulosin HCl SR Pellets ",
    strength: "0.2%, 0.4%",
    category: "SR",
    group: "PHARMA",
  },
  {
    name: "Trimetazidine ER Pellets ",
    strength: "55%",
    category: "ER",
    group: "PHARMA",
  },
   {
    name: "Venlafaxine HCl SR Pellets ",
    strength: "20%, 33%, 35%, 40%",
    category: "SR",
    group: "PHARMA",
  },
  // COMBO PRODUCTS

  {
    name: "Atorvastatin + Clopidogrel + Aspirin EC",
    strength: "Atorvastatin 20 mg + Clopidogrel 75 mg + Aspirin EC 75 mg",
    category: "Cardiac Combo",
    group: "COMBO",
  },
  {
    name: "Atorvastatin + Clopidogrel",
    strength: "Atorvastatin 20 mg + Clopidogrel 75 mg",
    category: "Cardiac Combo",
    group: "COMBO",
  },
  {
    name: "Atorvastatin + Aspirin",
    strength: "Atorvastatin 20 mg + Aspirin 75 mg",
    category: "Cardiac Combo",
    group: "COMBO",
  },
  {
    name: "Atorvastatin + Clopidogrel + Aspirin EC",
    strength: "Atorvastatin 10 mg + Clopidogrel 75 mg + Aspirin EC 75 mg",
    category: "Cardiac Combo",
    group: "COMBO",
  },
  {
    name: "Atorvastatin + Clopidogrel",
    strength: "Atorvastatin 10 mg + Clopidogrel 75 mg",
    category: "Cardiac Combo",
    group: "COMBO",
  },
  {
    name: "Atorvastatin + Aspirin",
    strength: "Atorvastatin 10 mg + Aspirin 75 mg",
    category: "Cardiac Combo",
    group: "COMBO",
  },

  {
    name: "Alpha Lipoic Acid + Pregabalin SR + Methylcobalamin",
    strength: "Alpha Lipoic Acid 100 mg + Pregabalin SR 75 mg + Methylcobalamin 750 mcg",
    category: "Neuro Combo",
    group: "COMBO",
  },
  {
    name: "Alpha Lipoic Acid + Pregabalin SR + Methylcobalamin",
    strength: "Alpha Lipoic Acid 100 mg + Pregabalin SR 75 mg + Methylcobalamin 1500 mcg",
    category: "Neuro Combo",
    group: "COMBO",
  },

  {
    name: "Chlorpheniramine Maleate + Phenylephrine HCl",
    strength: "Chlorpheniramine Maleate 4 mg + Phenylephrine HCl 5 mg",
    category: "Cold & Allergy Combo",
    group: "COMBO",
  },

  {
    name: "Carbonyl Iron + Folic Acid + Zinc",
    strength: "Various combinations",
    category: "Hematnic Combo",
    group: "COMBO",
  },
  {
    name: "Dried Ferrous Sulphate SR + Folic Acid",
    strength: "Dried Ferrous Sulphate SR 150 mg + Folic Acid 0.5 mg",
    category: "Hematnic Combo",
    group: "COMBO",
  },

// NUTRACEUTICAL / NUTRA PRODUCTS

  {
    name: "Ginger Extract Beadlets",
    strength: "As per formulation",
    category: "Herbal Extract",
    group: "NUTRA",
  },
  {
    name: "Black Pepper Extract Beadlets",
    strength: "As per formulation",
    category: "Herbal Extract",
    group: "NUTRA",
  },
  {
    name: "Boswellia Extract Beadlets",
    strength: "As per formulation",
    category: "Herbal Extract",
    group: "NUTRA",
  },
  {
    name: "Cyanocobalamin Beadlets",
    strength: "As per formulation",
    category: "Vitamin",
    group: "NUTRA",
  },
  {
    name: "Curcumin Capsules",
    strength: "As per formulation",
    category: "Herbal Supplement",
    group: "NUTRA",
  },
  {
    name: "Caffeine Beadlets",
    strength: "As per formulation",
    category: "Stimulant Supplement",
    group: "NUTRA",
  },
  {
    name: "Ashwagandha Beadlets",
    strength: "As per formulation",
    category: "Adaptogen",
    group: "NUTRA",
  },
  {
    name: "Chromium Picolinate Beadlets",
    strength: "As per formulation",
    category: "Mineral Supplement",
    group: "NUTRA",
  },
  {
    name: "Capsaicin Beadlets",
    strength: "As per formulation",
    category: "Herbal Active",
    group: "NUTRA",
  },
  {
    name: "Magnesium Beadlets",
    strength: "As per formulation",
    category: "Mineral Supplement",
    group: "NUTRA",
  },
  {
    name: "Omega-3 Fish Oil Capsules",
    strength: "As per formulation",
    category: "Fatty Acid Supplement",
    group: "NUTRA",
  },
  {
    name: "Vitamin D3 Capsules",
    strength: "As per formulation",
    category: "Vitamin",
    group: "NUTRA",
  },
  {
    name: "Calcimax Linoleic Acid",
    strength: "As per formulation",
    category: "Bone Health Supplement",
    group: "NUTRA",
  },
  {
    name: "Milk Thistle Capsules",
    strength: "As per formulation",
    category: "Liver Health Supplement",
    group: "NUTRA",
  },
  {
    name: "Moringa Capsules",
    strength: "As per formulation",
    category: "Herbal Supplement",
    group: "NUTRA",
  },

]


/* ================= FILTERS ================= */

const GROUP_TABS = [
  { label: "All", value: "ALL" },
  { label: "Individual Pellets", value: "PHARMA" },
  { label: "Blended Pellets", value: "COMBO" },
  { label: "Nutra Spheres", value: "NUTRA" },
] as const;

const PHARMA_FILTERS = [
  "All",
  "SR",
  "DR",
  "EC",
  "MUPS",
  "IR",
  "ER",
  "EC",
  "DC",
  "DDR",
  "DR",
  "Taste Masked",
];


/* ================= COMPONENT ================= */

export default function ProductsListPage() {
  const [search, setSearch] = useState("");
  const [activeGroup, setActiveGroup] =
    useState<"ALL" | ProductGroup>("ALL");
  const [activePharmaFilter, setActivePharmaFilter] =
    useState("All");


const isBlended = activeGroup === "COMBO";





  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesGroup =
        activeGroup === "ALL" || product.group === activeGroup;

      const matchesPharmaFilter =
        activeGroup !== "PHARMA" && activeGroup !== "ALL"
          ? true
          : activePharmaFilter === "All" ||
            product.category === activePharmaFilter;

      return matchesSearch && matchesGroup && matchesPharmaFilter;
    });
  }, [search, activeGroup, activePharmaFilter]);

  return (
    <main className="min-h-screen bg-white text-black">
 {/* ================= HERO ================= */}
<section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden">

  {/* ================= BACKGROUND IMAGE ================= */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{
      backgroundImage: "url('/assets/images/infra/infra5.png')",
    }}
  />

  {/* Optional overlay for readability */}
  <div className="absolute inset-0 bg-black/20" />

  {/* ================= CONTENT (GLASS BOX) ================= */}
  <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-20 flex justify-center lg:justify-start">
    <div
      className="
        
        max-w-[92%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl
        bg-white/60 backdrop-blur-lg
        rounded-2xl sm:rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        border border-white/40
        py-8 sm:py-10 md:py-14
        px-6 sm:px-8 md:px-10
        text-center lg:text-left
      "
    >
      <h1
        className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          font-extrabold
          text-pink-600
          uppercase
          tracking-wide
        "
      >
        Product Portfolio
      </h1>

      <p
        className="
          mt-4 sm:mt-5 md:mt-6
          text-sm sm:text-base md:text-lg
          text-gray-700
          leading-relaxed
        "
      >
        Precision-engineered pharmaceutical pellets, advanced
        release systems, combination formulations, and
        nutraceutical beadlets.
      </p>
    </div>
  </div>

  {/* ================= CURVED BOTTOM ================= */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <div className="w-full h-[60px] sm:h-[80px] md:h-[100px] bg-white rounded-t-[100%]" />
  </div>

</section>



{/* ================= products-list -start ================= */}
{/* ================= CONTROLS ================= */}
<section className="sticky top-0 z-30 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
    <div className="bg-white/80 border border-black/10 rounded-2xl shadow-lg px-4 sm:px-6 py-4 sm:py-6 space-y-5 sm:space-y-6">

      {/* Search + PDF */}
      <div className="flex flex-col xl:flex-row gap-4 items-stretch xl:items-center justify-between">

        {/* Search */}
        <div className="relative w-full xl:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/60 w-5 h-5" />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product name…"
            className="w-full pl-12 pr-10 py-3 rounded-full border border-black/20 bg-white text-black placeholder-black/50 focus:ring-2 focus:ring-pink-400 outline-none text-sm sm:text-base"
          />
        </div>

        {/* PDF */}
        <a
          href="/assets/pdf/nami-products.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-black text-white px-5 sm:px-6 py-3 rounded-full text-sm font-semibold hover:bg-black/90 w-full xl:w-auto"
        >
          <Download className="w-4 h-4" />
          Product PDF
        </a>
      </div>

      {/* Group Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {GROUP_TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              setActiveGroup(tab.value as any);
              setActivePharmaFilter("All");
            }}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition text-sm sm:text-base
              ${
                activeGroup === tab.value
                  ? "bg-pink-600 text-white shadow-lg scale-105"
                  : "bg-white text-black border border-black/20 hover:border-pink-500"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Pharma Filters */}
      {(activeGroup === "PHARMA" || activeGroup === "ALL") && (
        <div className="flex flex-wrap justify-center gap-2">
          {PHARMA_FILTERS.map((f, index) => (
  <button
    key={`${f}-${index}`}   // ✅ UNIQUE key
    onClick={() => setActivePharmaFilter(f)}
    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border transition
      ${
        activePharmaFilter === f
          ? "bg-pink-500 text-white"
          : "bg-white text-black border-black/20 hover:text-pink-600"
      }`}
  >
    {f}
  </button>
))}

        </div>
      )}
    </div>

    {/* Count */}
    <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-black text-right">
      Showing{" "}
      <span className="font-bold">
        {filteredProducts.length}
      </span>{" "}
      products
    </div>
  </div>
</section>

{/* ===================== FLOATING CAPSULES ===================== */}
<FloatingCapsules />

{/* ================= TABLE ================= */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-7">
  <div className="rounded-3xl shadow-2xl border border-black/30 overflow-hidden bg-white/80">
    <div className="overflow-x-auto">
      <table className="min-w-[640px] w-full text-black text-sm sm:text-base">
        <thead className="bg-pink-100">
  <tr>
    <th className="p-4 sm:p-5 text-left font-bold">#</th>
    <th className="p-4 sm:p-5 text-left font-bold">Product Name</th>
    <th className="p-4 sm:p-5 text-left font-bold">Strength</th>
    <th className="p-4 sm:p-5 text-left font-bold">
  {isBlended ? "Therapeutic Area" : "Category"}
</th>

  </tr>
</thead>


        <tbody>
          {filteredProducts.map((p, i) => (
            <tr
              key={i}
              className="border-b border-black/10 even:bg-white hover:bg-pink-50"
            >
              <td className="p-4 sm:p-5 font-bold">
                {i + 1}
              </td>
              <td className="p-4 sm:p-5 font-semibold whitespace-nowrap">
                {p.name}
              </td>
              <td className="p-4 sm:p-5">
                {p.strength || "—"}
              </td>
              <td className="p-4 sm:p-5">
                {p.category ? (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-pink-200 text-black whitespace-nowrap">
                    {p.category}
                  </span>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredProducts.length === 0 && (
        <div className="py-20 sm:py-24 text-center text-black">
          <PackageSearch className="mx-auto w-10 sm:w-12 h-10 sm:h-12 text-pink-400 mb-4" />
          <p className="text-base sm:text-lg font-semibold">
            No products found
          </p>
        </div>
      )}
    </div>
  </div>
</section>
{/* ================= products-list -end ================= */}


      {/* ================= CTA ================= */}
<section className="pb-14">
  <div className="max-w-4xl mx-auto px-6">
    <div className="backdrop-blur-0xl rounded-3xl shadow-xl border border-black/40 text-center py-12 px-6">
      <h2 className="text-3xl font-extrabold text-pink-600 mb-4">
        Request Specifications & Samples
      </h2>
      <p className="text-gray-700 text-base mb-6">
        Get detailed specifications, compatibility
        studies, and customized formulation support
        directly from our technical experts.
      </p>
      <a
        href="/contact"
        className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-bold text-base hover:bg-pink-600 transition shadow-lg"
      >
        Request Specifications
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
/* ===================== FLOATING CAPSULES – FULL PAGE ===================== */

const capsuleColors = [
  "from-pink-400 to-rose-500",
  "from-cyan-400 to-blue-500",
  "from-purple-400 to-indigo-500",
];

type Capsule = {
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

function FloatingCapsules() {
  const [capsules, setCapsules] = useState<Capsule[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }).map((_, i) => ({
      x: Math.random() * 100,
      size: 24 + Math.random() * 26,
      duration: 22 + Math.random() * 18,
      delay: Math.random() * 10,
      color: capsuleColors[i % capsuleColors.length],
    }));

    setCapsules(generated);
  }, []);

  if (!capsules.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {capsules.map((cap, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${cap.x}vw`,
            y: "1100",
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: "-200",
            opacity: [0, 0.35, 0.35, 0],
            rotate: 360,
          }}
          transition={{
            duration: cap.duration,
            delay: cap.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute rounded-full bg-gradient-to-br ${cap.color} blur-[0.4px]`}
          style={{
            width: cap.size,
            height: cap.size,
          }}
        />
      ))}
    </div>
  );
}      