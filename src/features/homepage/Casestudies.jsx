import CaseStudiesLg from "./CaseStudiesLg";

function Casestudies() {
  return (
    <section className="app-container mt-[60px] pb-10 lg:mt-[80px]">
      <header className="flex flex-col items-center gap-8 lg:flex-row lg:justify-start lg:gap-12">
        <h1 className="rounded-md bg-[#B9FF66] px-2 py-1 text-2xl font-medium text-black lg:text-4xl">
          Case Studies
        </h1>
        <p className="w-full max-w-[500px] text-[18px] font-normal leading-[22.97px] text-black lg:max-w-[580px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </header>
      <CaseStudiesLg />
    </section>
  );
}

export default Casestudies;
