import { useState } from "react";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import TrustedBrands from "./pages/TrustedBrands";
import ServicesSection from "./pages/ServicesSection";
import PortfolioSection from "./pages/PortfolioSection";
import WhyChooseUs from "./pages/WhyChooseUs";
import Footer from "./pages/Footer";
import TestimonialSection from "./pages/TestimonialSection";

function App() {
  return (
    <div className="bg-[#FAF7F3] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUs />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;
