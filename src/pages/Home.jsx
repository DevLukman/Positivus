import Accordion from "../features/homepage/Accordion";
import Casestudies from "../features/homepage/Casestudies";
import HeroSection from "../features/homepage/HeroSection";
import IndexServices from "../features/homepage/IndexServices";
import Marquee from "../features/homepage/Marquee";
import Team from "../features/homepage/Team";
import Testimonial from "../features/homepage/Testimonial";
import Navbar from "../ui/Navbar";
import Preloader from "../ui/Preloader";
import Contact from "../features/homepage/Contact";
import Footer from "../ui/Footer";
import MakeThingsHappen from "../features/homepage/MakeThingsHappen";
function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <HeroSection />
      <Marquee />
      <IndexServices />
      <MakeThingsHappen />
      <Casestudies />
      <Accordion />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
