import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValuePillars from "@/components/ValuePillars";
import ComparisonTable from "@/components/ComparisonTable";
import TechSpecs from "@/components/TechSpecs";
import Gallery from "@/components/Gallery";
import Financing from "@/components/Financing";
import SocialProof from "@/components/SocialProof";
import AboutUs from "@/components/AboutUs";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Hero (navy) → ValuePillars (light) */}
        <SectionDivider variant="wave" from="hsl(var(--background))" flip />

        <ValuePillars />

        {/* ValuePillars (light) → Comparison (light-diagonal) */}
        <SectionDivider variant="curve" from="hsl(var(--secondary))" />

        <ComparisonTable />

        {/* Comparison (light) → TechSpecs (navy) */}
        <SectionDivider variant="diagonal" from="hsl(var(--navy))" flip />

        <TechSpecs />

        {/* TechSpecs (navy) → Gallery (light) */}
        <SectionDivider variant="wave" from="hsl(var(--background))" flip />

        <Gallery />

        {/* Gallery (light) → Financing (light-diagonal) */}
        <SectionDivider variant="tilt" from="hsl(var(--secondary))" />

        <Financing />

        {/* Financing (light) → SocialProof (navy) */}
        <SectionDivider variant="curve" from="hsl(var(--navy-dark))" flip />

        <SocialProof />

        {/* SocialProof (navy) → AboutUs (light) */}
        <SectionDivider variant="wave" from="hsl(var(--background))" flip />

        <AboutUs />

        {/* AboutUs (light) → LeadForm (light-diagonal) */}
        <SectionDivider variant="tilt" from="hsl(var(--secondary))" />

        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </>
  );
};

export default Index;
