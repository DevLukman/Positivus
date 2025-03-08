const slideContent = [
  {
    id: 1,
    content:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 2,
    content:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 3,
    content:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function CaseStudiesLg() {
  return (
    <>
      <div className="mt-14 flex items-center justify-between rounded-[30px] bg-[#191a1b] px-10 py-14">
        {slideContent.map((item, index) => (
          <div
            key={item.id}
            className={`max-w-[350px] ${index < 2 ? "border-r border-[#f3f3f3]" : ""}`}
          >
            <p className="pr-4 text-white">{item.content}</p>
            <div className="mt-4 flex w-fit origin-center items-center gap-2 font-normal text-[#b9ff66] transition-all duration-300 hover:scale-[1.1]">
              <button>Learn more</button>
              <GoArrowUpRight size="1.3rem" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[30px] pb-10 lg:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {slideContent.map((item) => (
            <SwiperSlide
              key={item.id}
              className="rounded-[30px] bg-[#191a23] px-8 py-6 text-base text-white"
            >
              {item.content}
              <div className="mt-4 flex items-center gap-2 font-normal text-[#b9ff66]">
                <button>Learn more</button>
                <GoArrowUpRight />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CaseStudiesLg;
