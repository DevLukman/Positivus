import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Helper function to split text into characters
const splitTextIntoChars = (element) => {
  if (!element) return [];
  const text = element.textContent;
  element.innerHTML = ""; // Clear existing text

  const chars = text.split("").map((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block"; // Ensure GSAP animations work correctly
    element.appendChild(span);
    return span;
  });

  return chars;
};

const SplitTextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into individual character spans
    const chars = splitTextIntoChars(textRef.current);

    // Animate characters with GSAP
    gsap.from(chars, {
      y: 400,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="mask-clip-path">
        <h1 ref={textRef} className="text-8xl font-bold uppercase">
          Coming-soon
        </h1>
      </div>
    </div>
  );
};

export default SplitTextAnimation;
