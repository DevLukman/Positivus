import { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

GridTransform.propTypes = {
  children: PropTypes.string.isRequired,
};
function GridTransform({ children }) {
  const [transformStyle, setStransformStyle] = useState("");
  const gridRef = useRef();
  function handleMouseMove(e) {
    if (!gridRef.current) return;
    const { left, top, width, height } =
      gridRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeX - 0.5) * 10;
    const tiltY = (relativeY - 0.5) * -10;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;
    setStransformStyle(newTransform);
  }
  function handleMouseLeave() {
    setStransformStyle("");
  }
  return (
    <motion.div
      style={{ transform: transformStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={gridRef}
    >
      {children}
    </motion.div>
  );
}

function GridUiLg() {
  return (
    <>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#f3f3f3] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[570px] justify-between px-2 py-2">
            <div>
              <h3 className="max-w-[225px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Search engine
              </h3>
              <h3 className="max-w-[197px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Optimization
              </h3>
            </div>
            <div>
              <img
                src="/images/indexservices-1.png"
                alt="services"
                className="mt-8"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[500px] items-center gap-4 px-2">
            <p className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </p>
            <span className="text-base font-normal">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#b9ff66] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[500px] justify-between py-2">
            <div>
              <h3 className="max-w-[225px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Pay-per-click
              </h3>
              <h3 className="max-w-[197px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Advertising
              </h3>
            </div>
            <div>
              <img
                src="/images/indexservices-2.png"
                alt="services"
                className="mt-8"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[500px] items-center gap-4">
            <p className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </p>
            <span className="text-base font-normal">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#191a23] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[500px] justify-between py-2">
            <div>
              <h3 className="max-w-[225px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Social Media
              </h3>
              <h3 className="max-w-[197px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Marketing
              </h3>
            </div>
            <div>
              <img
                src="/images/indexservices-3.png"
                alt="services"
                className="mt-8 max-w-[80%]"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[500px] items-center gap-4">
            <p className="rounded-full bg-[#fff] px-2 py-2 text-lg text-[#000]">
              <GoArrowUpRight />
            </p>
            <span className="text-base font-normal text-white">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#f3f3f3] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[500px] justify-between py-2">
            <div>
              <h3 className="max-w-[225px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Email
              </h3>
              <h3 className="max-w-[197px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Marketing
              </h3>
            </div>
            <div>
              <img
                src="/images/indexservices-4.png"
                alt="services"
                className="mt-8 max-w-[80%]"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[500px] items-center gap-4">
            <p className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </p>
            <span className="text-base font-normal">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#b9ff66] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[500px] justify-between py-2">
            <div>
              <h3 className="max-w-[225px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Content
              </h3>
              <h3 className="max-w-[197px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Creation
              </h3>
            </div>
            <div>
              <img
                src="/images/indexservices-5.png"
                alt="services"
                className="mt-8 max-w-[80%]"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[500px] items-center gap-4">
            <p className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </p>
            <span className="text-base font-normal">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#191a23] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[500px] justify-between py-2">
            <div>
              <h3 className="max-w-[225px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Analytics and
              </h3>
              <h3 className="max-w-[197px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Tracking
              </h3>
            </div>
            <div>
              <img
                src="/images/indexservices-6.png"
                alt="services"
                className="mt-8 max-w-[80%]"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[500px] items-center gap-4">
            <p className="rounded-full bg-[#fff] px-2 py-2 text-lg text-[#000]">
              <GoArrowUpRight />
            </p>
            <span className="text-base font-normal text-white">Learn more</span>
          </div>
        </div>
      </GridTransform>
    </>
  );
}

export default GridUiLg;
