import HeroSection from "./HeroSection";
import StorySection from "./StorySection";
import CapabilitiesSection from "./CapabilitiesSection";
import ValuesSection from "./ValuesSection";
import FloatingCapsules from "./FloatingCapsules";

export const metadata = {
  title: "About Us | Nami Life Sciences",
  description:
    "Learn about Nami Life Sciences, a pharmaceutical and nutraceutical pellet manufacturer delivering precision-engineered drug delivery solutions from India.",
};

export default function AboutPage() {
  return (
    <main className="relative  text-neutral-900 overflow-hidden">

      {/* ===== Floating Capsules Background ===== */}
      <FloatingCapsules />

      {/* ===== Page Content ===== */}
      <div className="relative z-10">
        <HeroSection />
        <StorySection />
        <CapabilitiesSection />
        <ValuesSection />
      </div>

    </main>
  );
}





