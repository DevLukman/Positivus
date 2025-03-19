import { GoArrowUpRight } from "react-icons/go";

function GridUimobile() {
  return (
    <>
      <div className="rounded-[40px] border border-b-8 border-[#000] bg-[#f3f3f3] px-4 py-2 pb-4">
        <div className="mt-8 flex flex-col gap-8 px-4 pb-4">
          <div>
            <h4 className="w-fit rounded-lg bg-[#b9ff66] p-1 text-2xl font-medium">
              Search engine
            </h4>
            <h4 className="w-fit rounded-lg bg-[#b9ff66] p-1 text-2xl font-medium">
              optimization
            </h4>
          </div>
          <div className="flex items-end justify-between">
            <span className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </span>
            <img
              src="/images/index-1.svg"
              alt="services"
              className="max-w-[60%]"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="rounded-[40px] border border-b-8 border-[#000] bg-[#b9ff66] px-4 py-2 pb-4">
        <div className="mt-8 flex flex-col gap-8 px-4 pb-4">
          <div>
            <h4 className="w-fit rounded-lg bg-[#fff] p-1 text-2xl font-medium">
              Pay-per-click
            </h4>
            <h4 className="w-fit rounded-lg bg-[#fff] p-1 text-2xl font-medium">
              Advertising
            </h4>
          </div>
          <div className="flex items-end justify-between">
            <span className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </span>
            <img
              src="/images/index-2.svg"
              alt="services"
              className="max-w-[60%]"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="rounded-[40px] border border-b-8 border-[#000] bg-[#191a23] px-4 py-2 pb-4">
        <div className="mt-8 flex flex-col gap-8 px-4 pb-4">
          <div>
            <h4 className="w-fit rounded-lg bg-[#fff] p-1 text-2xl font-medium">
              Social Media
            </h4>
            <h4 className="w-fit rounded-lg bg-[#fff] p-1 text-2xl font-medium">
              Marketing
            </h4>
          </div>
          <div className="flex items-end justify-between">
            <span className="rounded-full bg-[#fff] px-2 py-2 text-lg text-[#000]">
              <GoArrowUpRight />
            </span>
            <img
              src="/images/index-3.svg"
              alt="services"
              className="max-w-[60%]"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="rounded-[40px] border border-b-8 border-[#000] bg-[#f3f3f3] px-4 py-2 pb-4">
        <div className="mt-8 flex flex-col gap-8 px-4 pb-4">
          <div>
            <h4 className="w-fit rounded-lg bg-[#b9ff66] p-1 text-2xl font-medium">
              Email
            </h4>
            <h4 className="w-fit rounded-lg bg-[#b9ff66] p-1 text-2xl font-medium">
              Marketing
            </h4>
          </div>
          <div className="flex items-end justify-between">
            <span className="rounded-full bg-[#000] px-2 py-2 text-2xl font-medium text-[#b9ff66]">
              <GoArrowUpRight />
            </span>
            <img
              src="/images/index-4.svg"
              alt="services"
              className="max-w-[60%]"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="rounded-[40px] border border-b-8 border-[#000] bg-[#b9ff66] px-4 py-2 pb-4">
        <div className="mt-8 flex flex-col gap-8 px-4 pb-4">
          <div>
            <h4 className="w-fit rounded-lg bg-[#fff] p-1 text-2xl font-medium">
              Content
            </h4>
            <h4 className="w-fit rounded-lg bg-[#fff] p-1 text-2xl font-medium">
              Creation
            </h4>
          </div>
          <div className="flex items-end justify-between">
            <span className="rounded-full bg-[#000] px-2 py-2 text-lg text-[#b9ff66]">
              <GoArrowUpRight />
            </span>
            <img
              src="/images/index-5.svg"
              alt="services"
              className="max-w-[60%]"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="rounded-[40px] border border-b-8 border-[#000] bg-[#191a23] px-4 py-2 pb-4">
        <div className="mt-8 flex flex-col gap-8 px-4 pb-4">
          <div>
            <h4 className="w-fit rounded-lg bg-[#fff] p-1 text-2xl font-medium">
              Analytics and
            </h4>
            <h4 className="w-fit rounded-lg bg-[#fff] p-1 text-2xl font-medium">
              Tracking
            </h4>
          </div>
          <div className="flex items-end justify-between">
            <span className="rounded-full bg-[#fff] px-2 py-2 text-lg text-[#000]">
              <GoArrowUpRight />
            </span>
            <img
              src="/images/index-6.svg"
              alt="services"
              className="max-w-[60%]"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GridUimobile;
