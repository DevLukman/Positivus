import { motion } from "framer-motion";

const marqueeImages = [
  "/images/marquee-1.png",
  "/images/marquee-2.png",
  "/images/marquee-3.png",
  "/images/marquee-4.png",
  "/images/marquee-5.png",
  "/images/marquee-6.png",
  "/images/marquee-1.png",
  "/images/marquee-3.png",
  "/images/marquee-4.png",
  "/images/marquee-6.png",
  "/images/marquee-1.png",
  "/images/marquee-5.png",
  "/images/marquee-3.png",
  "/images/marquee-2.png",
  "/images/marquee-4.png",
];

function Marquee() {
  return (
    <section className="app-container relative mt-14 w-full pb-8">
      <motion.div
        className="relative flex space-x-10 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      >
        {marqueeImages.map((img, index) => (
          <img
            src={img}
            key={index}
            alt={`index-${index}`}
            className="grayscale"
          />
        ))}
      </motion.div>
      <motion.div
        className="relative mt-8 flex space-x-10 whitespace-nowrap lg:hidden"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      >
        {marqueeImages.map((img, index) => (
          <img
            src={img}
            key={index}
            alt={`index-${index}`}
            className="grayscale"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Marquee;
