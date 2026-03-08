export const dynamic = "force-dynamic";

import Banner from "./home/Banner";
import NewsTicker from "./home/NewsTicker";
import Pharmaceuticals from "./home/Pharmaceuticals";
import GlobalReach from "./home/GlobalReach";
import Manufacturing from "./home/Manufacturing";
import WhatWeDo from "./home/WhatWeDo";
import CoreCapabilities from "./home/CoreCapabilities";
import Testimonials from "./home/Testimonials";
import YoutubeSection from "./home/YoutubeSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://namilifesciences.com"),
  title: {
    default: "Nami Life Sciences",
    template: "%s | Nami Life Sciences",
  },
  description:
    "Precision-engineered pharmaceutical pellets and nutraceutical solutions.",
};

export default function HomePage() {
  return (
    <main className="relative">
      <Banner />
      {/* <NewsTicker /> */}
      <Pharmaceuticals />
      <GlobalReach />
      <Manufacturing />
      <WhatWeDo />
      <CoreCapabilities />
      <Testimonials />
      {/* <YoutubeSection /> */}
    </main>
  );
}