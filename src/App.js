import CtaSection from "./Components/CtaSection/CtaSection";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Testimonials from "./Components/Testimonials/Testimonials";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
