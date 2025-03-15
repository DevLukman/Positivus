import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const UserTestimonials = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
];

function Testimonial() {
  return (
    <section className="app-container mt-[30px] pb-10">
      <header className="flex flex-col items-center gap-8 lg:flex-row lg:justify-start lg:gap-12">
        <h1 className="rounded-md bg-[#B9FF66] px-2 py-1 text-2xl font-medium text-black lg:text-4xl">
          Testimonials
        </h1>
        <p className="w-full max-w-[500px] text-center text-[18px] font-normal leading-[22.97px] text-black lg:max-w-[580px] lg:text-left">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </header>
      <div className="mt-[50px] rounded-[30px] bg-[#191a23] px-10 py-10 pb-16 text-[#fff]">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.3 },
            1024: { slidesPerView: 2 },
          }}
          autoplay={{}}
        >
          {UserTestimonials.map((content, index) => (
            <SwiperSlide key={index}>
              <p className="max-w-[500px] rounded-[30px] border-[2px] border-[#b9ff66] p-8 text-xs font-normal lg:text-lg">
                {content.quote}
              </p>
              <div className="ml-8 mt-6">
                <h4 className="font-medium text-[#b9ff66]">{content.name}</h4>
                <h4>{content.position}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
