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
/* ================= SEO META TAGS (HOMEPAGE) ================= */


export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourdomain.com"),
  title: {
    default: "Nami Life Sciences",
    template: "%s | Nami Life Sciences",
  },
  description:
    "Precision-engineered pharmaceutical pellets and nutraceutical solutions.",
};



/* ================= PAGE COMPONENT ================= */

export default function HomePage() {
  return (
    <>
      <Banner />
      {/* <NewsTicker /> */}
      <Pharmaceuticals />
      <GlobalReach />
      <Manufacturing />
      <WhatWeDo />
      <CoreCapabilities />
      <Testimonials />
      {/* <YoutubeSection /> */}
    </>
  );
}
