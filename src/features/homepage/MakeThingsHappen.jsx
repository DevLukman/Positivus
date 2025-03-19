function MakeThingsHappen() {
  return (
    <section className="app-container mt-[60px] lg:mt-[80px]">
      <div className="flex justify-between rounded-[30px] bg-[#f3f3f3] px-8 pb-6">
        <div className="mt-8 lg:mt-12">
          <h3 className="text-2xl font-medium lg:text-3xl">
            Let&apos;s make things happen
          </h3>
          <p className="mt-4 text-base font-normal lg:max-w-[500px] lg:text-lg">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <button className="mt-6 hidden w-full rounded-md bg-[#191A23] px-6 py-2 text-center font-normal text-white outline-none transition duration-300 hover:bg-[#b9ff66] hover:text-[#191a23] md:w-max lg:mt-8 lg:block lg:text-xl">
            Get your free proposal
          </button>
          <button className="mt-4 w-full rounded-md bg-[#191A23] px-6 py-2 text-center font-normal text-white outline-none transition duration-300 hover:bg-[#b9ff66] hover:text-[#191a23] md:w-max lg:mt-8 lg:hidden lg:text-xl">
            Get your proposal
          </button>
        </div>
        <div>
          <img
            src="/images/makethings.svg"
            alt="make things happen"
            className="hidden max-w-[90%] lg:block"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
}

export default MakeThingsHappen;
