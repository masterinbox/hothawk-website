import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheDifference from "@/components/TheDifference";
import ModernStack from "@/components/ModernStack";
import ProblemSection from "@/components/ProblemSection";
import FeatureSection from "@/components/FeatureSection";
import MasterInboxSection from "@/components/MasterInboxSection";
import ComparisonSection from "@/components/ComparisonSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheDifference />
        <ModernStack />
        <ProblemSection />
        <FeatureSection />
        <MasterInboxSection />
        <ComparisonSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
