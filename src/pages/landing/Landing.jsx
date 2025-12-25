import Footer from "../../components/layout/Footer";
import Community from "./Community";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import ServicesOverview from "./ServicesOverview";

function Landing() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <Community />
      <FAQ />
      <Footer/>
    </>
  );
}

export default Landing;

