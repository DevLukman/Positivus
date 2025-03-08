import Casestudies from "../features/homepage/Casestudies";
import HeroSection from "../features/homepage/HeroSection";
import IndexServices from "../features/homepage/IndexServices";
import Marquee from "../features/homepage/Marquee";
import Navbar from "../ui/Navbar";
import Preloader from "../ui/Preloader";

function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <HeroSection />
      <Marquee />
      <IndexServices />
      <Casestudies />
    </>
  );
}

export default Home;
