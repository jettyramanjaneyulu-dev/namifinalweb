import Banner from "./home/Banner";
import Pharmaceuticals from "./home/Pharmaceuticals";
import GlobalReach from "./home/GlobalReach";
import Manufacturing from "./home/Manufacturing";
import WhatWeDo from "./home/WhatWeDo";
import CoreCapabilities from "./home/CoreCapabilities";
import Testimonials from "./home/Testimonials";

export default function HomePage() {
  return (
    <main className="relative">
      <Banner />
      <Pharmaceuticals />
      <GlobalReach />
      <Manufacturing />
      <WhatWeDo />
      <CoreCapabilities />
      <Testimonials />
    </main>
  );
}