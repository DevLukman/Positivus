import AccordionItem from "./AccordionItem";

function Accordion() {
  return (
    <section className="app-container mt-[10px] pb-[70px] lg:mt-[40px]">
      <header className="flex flex-col items-center gap-8 lg:flex-row lg:justify-start lg:gap-12">
        <h1 className="hidden rounded-md bg-[#B9FF66] px-2 py-1 text-4xl font-medium text-black lg:block">
          Our Working Process
        </h1>
        <div className="flex flex-col items-center justify-center lg:hidden">
          <h1 className="rounded-md bg-[#b9ff66] px-2 py-1 text-4xl font-medium">
            Our Working
          </h1>
          <h1 className="rounded-md bg-[#b9ff66] px-2 py-1 text-4xl font-medium">
            Process
          </h1>
        </div>
        <p className="w-full max-w-[500px] text-center text-[18px] font-normal leading-[22.97px] text-black lg:max-w-[300px] lg:text-left">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </header>
      <AccordionItem />
    </section>
  );
}

export default Accordion;
