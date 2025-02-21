import HeroSection from "../features/homepage/HeroSection";
import IndexServices from "../features/homepage/IndexServices";
import Marquee from "../features/homepage/Marquee";
import Navbar from "../ui/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marquee />
      <IndexServices />
    </>
  );
}

export default Home;
