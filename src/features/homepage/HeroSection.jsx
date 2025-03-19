function HeroSection() {
  return (
    <section className="mt-[20px] w-screen lg:mt-[40px]">
      <div className="app-container flex w-screen flex-col justify-between gap-10 md:flex-row">
        <div className="flex w-full flex-col sm:items-center sm:justify-center lg:items-start lg:justify-start">
          <div className="overflow-hidden">
            <h2 className="max-w-[560px] text-[2.3rem] font-medium leading-[40px] text-[#000] md:text-[3.3rem] md:leading-[70px] lg:text-[3.75rem]">
              Navigating the digital landscape for success
            </h2>
            <div className="flex items-center justify-center lg:hidden">
              <img
                src="/images/hero-illustration.svg"
                height="100%"
                width="100%"
                className="w-full"
                alt="hero-image"
              />
            </div>
          </div>
          <p className="max-w-[500px] text-[14px] font-normal leading-[20px] sm:text-xl lg:mt-[25px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button className="mt-6 w-full rounded-md bg-[#191A23] px-6 py-2 text-center text-xl font-normal text-white outline-none transition duration-300 hover:bg-[#b9ff66] hover:text-[#191a23] md:w-max lg:mt-8">
            Book a consultation
          </button>
        </div>
        <img
          src="/images/hero-illustration.svg"
          width="100%"
          height="100%"
          className="hidden max-w-[500px] lg:block"
          alt="hero-image"
        />
      </div>
    </section>
  );
}

export default HeroSection;
