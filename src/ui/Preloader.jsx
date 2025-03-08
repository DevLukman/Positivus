const PreloaderText = ["p", "o", "s", "i", "t", "i", "v", "u", "s"];
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
    tl.from("#text", {
      y: 200,
      ease: "power4.inOut",
      duration: 1.5,
      stagger: 0.1,
    });
    tl.to("#container", {
      height: 0,
      ease: "power4.inOut",
      duration: 1.3,
      stagger: 0.06,
    });
  });
  return (
    <>
      <div
        id="container"
        className="mask-clip-path fixed inset-0 z-20 h-full w-full bg-[#f3f3f3]"
      >
        <div className="mask-clip-path absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] items-center justify-center">
          {PreloaderText.map((chars, index) => (
            <p
              id="text"
              key={index}
              className="text-[12vw] font-extrabold uppercase tracking-wide text-[#191a1b] lg:text-[7vw]"
            >
              {chars}
            </p>
          ))}
        </div>
      </div>
      <div
        id="container"
        className="mask-clip-path fixed inset-0 z-10 h-full w-full bg-[#b9ff66]"
      ></div>
    </>
  );
}

export default Preloader;
