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
      <div className="app-container mt-20 grid h-[100dvh] grid-cols-1 gap-8 lg:grid-cols-2"></div>
    </section>
  );
}

export default IndexServices;
