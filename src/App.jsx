import { useState } from "react";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import TrustedBrands from "./pages/TrustedBrands";
import ServicesSection from "./pages/ServicesSection";
import PortfolioSection from "./pages/PortfolioSection";
import WhyChooseUs from "./pages/WhyChooseUs";
import Footer from "./pages/Footer";
import TestimonialSection from "./pages/TestimonialSection";
import introVideo from "./assets/intro.mp4";

function App() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [muted, setMuted] = useState(true);

  if (!videoEnded) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
        <video
          autoPlay
          muted={muted}
          playsInline
          className="
            w-full
            h-full
            object-contain
            md:object-cover
          "
          onEnded={() => setVideoEnded(true)}
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Unmute Button */}
        {muted && (
          <button
            onClick={() => setMuted(false)}
            className="
              absolute
              top-3 right-3
              sm:top-5 sm:right-5
              md:top-6 md:right-6
              px-3 py-2
              sm:px-4 sm:py-2
              text-xs sm:text-sm
              rounded-full
              bg-black/40
              backdrop-blur-md
              border border-white/20
              text-white
              font-medium
              transition-all duration-300
              hover:bg-white
              hover:text-black
            "
          >
            🔊 Unmute
          </button>
        )}

        {/* Skip Button */}
        <button
          onClick={() => setVideoEnded(true)}
          className="
            absolute
            bottom-4 right-4
            sm:bottom-5 sm:right-5
            md:bottom-8 md:right-8
            px-4 py-2
            sm:px-5 sm:py-2
            text-xs sm:text-sm
            rounded-full
            bg-white/10
            backdrop-blur-md
            border border-white/20
            text-white
            font-medium
            transition-all duration-300
            hover:bg-white
            hover:text-black
          "
        >
          Skip Intro →
        </button>
      </div>
    );
  }

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
