/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
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
    <div
      style={{ transform: transformStyle }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={gridRef}
    >
      {children}
    </div>
  );
}

function GridUiLg() {
  return (
    <>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#f3f3f3] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[550px] justify-between px-2 py-2">
            <div>
              <h4 className="max-w-[225px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Search engine
              </h4>
              <h4 className="max-w-[197px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Optimization
              </h4>
            </div>
            <div>
              <img src="/images/index-1.svg" alt="services" className="mt-8" />
            </div>
          </div>
          <div className="mx-auto flex max-w-[550px] items-center gap-4 px-2">
            <span className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </span>
            <span className="text-base font-normal">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#b9ff66] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[550px] justify-between px-2 py-2">
            <div>
              <h4 className="max-w-[225px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Pay-per-click
              </h4>
              <h4 className="max-w-[197px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Advertising
              </h4>
            </div>
            <div>
              <img
                src="/images/index-2.svg"
                alt="Per-per-click Advertising"
                className="mt-8"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[550px] items-center gap-4 px-4">
            <span className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </span>
            <span className="text-base font-normal">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#191a23] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[550px] justify-between px-2 py-2">
            <div>
              <h4 className="max-w-[225px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Social Media
              </h4>
              <h4 className="max-w-[197px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Marketing
              </h4>
            </div>
            <div>
              <img
                src="/images/index-3.svg"
                alt="Social Media Marketing"
                className="mt-8 max-w-[80%]"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[550px] items-center gap-4 px-4">
            <span className="rounded-full bg-[#fff] px-2 py-2 text-lg text-[#000]">
              <GoArrowUpRight />
            </span>
            <span className="text-base font-normal text-white">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#f3f3f3] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[550px] justify-between px-2 py-2">
            <div>
              <h4 className="w-fit rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Email
              </h4>
              <h4 className="max-w-[197px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Marketing
              </h4>
            </div>
            <div>
              <img
                src="/images/index-4.svg"
                alt="Email Marketing"
                className="mt-8 max-w-[80%]"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[550px] items-center gap-4 px-4">
            <span className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </span>
            <span className="text-base font-normal">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#b9ff66] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[550px] justify-between px-2 py-2">
            <div>
              <h4 className="max-w-[225px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Content
              </h4>
              <h4 className="max-w-[197px] rounded-[7px] bg-[#fff] px-2 py-1 text-3xl font-medium">
                Creation
              </h4>
            </div>
            <div>
              <img
                src="/images/index-5.svg"
                alt="Content Creation"
                className="mt-8 max-w-[80%]"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[550px] items-center gap-4 px-4">
            <span className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </span>
            <span className="text-base font-normal">Learn more</span>
          </div>
        </div>
      </GridTransform>
      <GridTransform>
        <div className="h-[310px] cursor-pointer rounded-[40px] border border-b-[5px] border-[#000] bg-[#191a23] pb-[30px]">
          <div className="mx-auto mt-8 flex max-w-[550px] justify-between px-2 py-2">
            <div>
              <h4 className="max-w-[225px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Analytics and
              </h4>
              <h4 className="max-w-[197px] rounded-[7px] bg-[#b9ff66] px-2 py-1 text-3xl font-medium">
                Tracking
              </h4>
            </div>
            <div>
              <img
                src="/images/index-6.svg"
                alt="Analytics and Tracking"
                className="mt-8 max-w-[80%]"
                width="100%"
              />
            </div>
          </div>
          <div className="mx-auto flex max-w-[550px] items-center gap-4 px-4">
            <span className="rounded-full bg-[#fff] px-2 py-2 text-lg text-[#000]">
              <GoArrowUpRight />
            </span>
            <span className="text-base font-normal text-white">Learn more</span>
          </div>
        </div>
      </GridTransform>
    </>
  );
}

export default GridUiLg;
