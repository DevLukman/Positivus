const loaderChars = ["p", "o", "s", "i", "t", "i", "v", "u", "s"];
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Preloader() {
  useGSAP(function () {
    const tl = gsap.timeline({
      onStart: () => {
        document.body.classList.add("overflow-hidden");
      },
      onComplete: () => {
        document.body.classList.remove("overflow-hidden");
        gsap.set("#container", { display: "none" });
      },
    });
    tl.from("#char", {
      y: 200,
      ease: "power4.inOut",
      duration: 1,
      stagger: 0.1,
    });
    tl.to("#char", {
      y: -120,
      ease: "power4.inOut",
      duration: 0.7,
      stagger: 0.05,
    });
    tl.to(
      "#container",
      {
        height: 0,
        ease: "power4.inOut",
        duration: 1,
        stagger: 0.075,
      },
      "-=0.6",
    );
  });
  return (
    <>
      <div
        id="container"
        className="mask-clip-path fixed inset-0 z-50 hidden h-full w-full bg-[#f3f3f3] lg:block"
      >
        <div className="mask-clip-path absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] items-center justify-center">
          {loaderChars.map((char, index) => (
            <span
              id="char"
              key={index}
              className="inline-block text-[10vw] font-extrabold uppercase tracking-wide text-[#191a1b] lg:text-[7vw]"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div
        id="container"
        className="mask-clip-path fixed inset-0 z-40 h-full w-full bg-[#b9ff66]"
      ></div>
    </>
  );
}

export default Preloader;
