"use client";

import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

/** ✅ Minimal geography type (Vercel-safe) */
type RSMGeography = {
  id: string;
  rsmKey: string;
};

const geoUrl =
  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

/** 🎯 Highlighted countries */
const COUNTRIES = [
  { id: "364", name: "Iran" },
  { id: "818", name: "Egypt" },
  { id: "356", name: "India" },
  { id: "586", name: "Pakistan" },
  { id: "004", name: "Afghanistan" },
  { id: "050", name: "Bangladesh" },
];

const GlobalMapSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /** 🔁 Blink countries one by one */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % COUNTRIES.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const activeCountryId = COUNTRIES[activeIndex].id;

  return (
    <section className="w-full py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase">
            Global Presence
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Connecting the World
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            Strategic presence across key global regions.
          </p>
        </div>

        {/* Map */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-6xl h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px]">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 120, center: [40, 25] }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: RSMGeography[] }) =>
                  geographies.map((geo: RSMGeography) => {
                    const isHighlighted = COUNTRIES.some(
                      (c) => c.id === geo.id
                    );

                    const isActive = geo.id === activeCountryId;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                          isActive
                            ? "#1D4ED8"
                            : isHighlighted
                            ? "#60A5FA"
                            : "#E5E7EB"
                        }
                        stroke="#ffffff"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: isActive
                              ? "#1E40AF"
                              : isHighlighted
                              ? "#3B82F6"
                              : "#D1D5DB",
                            outline: "none",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>

        {/* Country names */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
          {COUNTRIES.map((country, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={country.id}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-500 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg scale-110 animate-pulse"
                    : "bg-blue-600/10 text-blue-700"
                }`}
              >
                {country.name}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GlobalMapSection;
