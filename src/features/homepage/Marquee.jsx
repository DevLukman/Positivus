import { motion } from "framer-motion";

const marqueeImages = [
  "/images/Amazon.svg",
  "/images/Dribble.svg",
  "/images/Hubspot.svg",
  "/images/Notion.svg",
  "/images/Netflix.svg",
  "/images/Zoom.svg",
  "/images/Amazon.svg",
  "/images/Dribble.svg",
  "/images/Hubspot.svg",
  "/images/Notion.svg",
  "/images/Netflix.svg",
  "/images/Notion.svg",
  "/images/Netflix.svg",
  "/images/Zoom.svg",
  "/images/Amazon.svg",
];

function Marquee() {
  return (
    <section className="app-container relative mt-14 w-full overflow-hidden pb-8">
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
            width="100%"
            height="100%"
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
            width="100%"
            height="100%"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Marquee;
