import GridUi from "./GridUi";

function IndexServices() {
  return (
    <section className="mt-8 pb-10 lg:mt-14">
      <header className="app-container flex flex-col items-center gap-6 lg:flex-row lg:justify-start lg:gap-12">
        <h3 className="rounded-md bg-[#B9FF66] px-2 py-1 text-3xl font-medium text-black lg:text-4xl">
          Services
        </h3>
        <p className="w-full max-w-[500px] text-center text-lg font-normal text-black lg:max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </header>
      <GridUi />
    </section>
  );
}

export default IndexServices;
