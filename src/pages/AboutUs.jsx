import { useGSAP } from "@gsap/react";
import { splitTextIntoChars } from "../utils/helper";
import { useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AboutUs() {
  const textRef = useRef(null);
  useGSAP(function () {
    if (!textRef.current) return;
    const chars = splitTextIntoChars(textRef.current);
    gsap.from(chars, {
      y: 150,
      ease: "power4.inOut",
      duration: 1,
      stagger: 0.05,
    });
  }, []);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <h1
        className="mask-clip-path text-[8vw] font-extrabold uppercase md:text-[7vw] lg:text-[6vw]"
        ref={textRef}
      >
        Coming-Soon
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "backInOut", duration: 1 }}
        className="mt-[30px]"
      >
        <Link
          to="/"
          className="rounded-md border-[2px] bg-[#b9ff66] p-3 font-normal uppercase"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}

export default AboutUs;
