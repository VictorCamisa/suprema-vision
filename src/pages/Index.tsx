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
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValuePillars />
        <ComparisonTable />
        <TechSpecs />
        <Gallery />
        <Financing />
        <SocialProof />
        <AboutUs />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </>
  );
};

export default Index;
