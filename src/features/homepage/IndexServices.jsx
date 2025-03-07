import GridUi from "./GridUi";

function IndexServices() {
  return (
    <section className="mt-8 pb-10 lg:mt-14">
      <header className="app-container flex flex-col items-center gap-8 lg:flex-row lg:justify-start lg:gap-12">
        <h1 className="rounded-md bg-[#B9FF66] px-2 py-1 text-2xl font-medium text-black lg:text-4xl">
          Services
        </h1>
        <p className="w-full max-w-[500px] text-center text-[18px] font-normal leading-[22.97px] text-black lg:max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </header>
      <GridUi />
      <section className="app-container mt-[60px] lg:mt-[100px]">
        <div className="flex h-[347px] justify-between rounded-[30px] bg-[#f3f3f3] px-10">
          <div className="mt-8 lg:mt-12">
            <h3 className="text-2xl font-medium lg:text-3xl">
              Let&apos;s make things happen
            </h3>
            <p className="mt-4 text-base font-normal lg:max-w-[500px] lg:text-lg">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>

            <button className="mt-6 w-full rounded-md bg-[#191A23] px-6 py-2 text-center font-normal text-white outline-none transition duration-300 hover:bg-[#b9ff66] hover:text-[#191a23] md:w-max lg:mt-8 lg:text-xl">
              Get your free proposal
            </button>
          </div>
          <div>
            <img
              src="/images/makething.png"
              alt="makethings"
              className="hidden max-w-[90%] lg:block"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default IndexServices;
