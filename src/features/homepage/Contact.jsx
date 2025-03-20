function Contact() {
  return (
    <section className="app-container mt-[30px] overflow-hidden pb-10">
      <header className="flex flex-col items-center gap-8 lg:flex-row lg:justify-start lg:gap-12">
        <h1 className="rounded-md bg-[#B9FF66] px-2 py-1 text-2xl font-medium text-black lg:text-4xl">
          Contact Us
        </h1>
        <p className="w-full max-w-[500px] text-center text-[18px] font-normal leading-[22.97px] text-black lg:max-w-[350px] lg:text-left">
          Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
        </p>
      </header>
      <div className="relative mt-[50px] flex items-center justify-between overflow-hidden rounded-[30px] bg-[#f3f3f3] px-6 py-10 pb-14 lg:rounded-[20px] lg:px-14">
        <form className="flex w-[100%] flex-col lg:w-[50%]">
          <div className="flex items-center gap-8">
            <div className="flex gap-2">
              <input type="radio" className="accent-[#b9ff66]" id="sayHi" />
              <label className="text-lg font-normal" htmlFor="sayHi">
                Say Hi
              </label>
            </div>
            <div className="flex gap-2">
              <input type="radio" className="accent-[#b9ff66]" id="getAQuote" />
              <label className="text-lg font-normal" htmlFor="getAQuote">
                Get a Quote
              </label>
            </div>
          </div>
          <div className="mt-[20px] flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-base font-normal">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="max-w-[400px] rounded-[10px] border border-[#000] px-8 py-3"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-base font-normal">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="max-w-[400px] rounded-[10px] border border-[#000] px-8 py-3"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-base font-normal">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="max-w-[400px] rounded-[10px] border border-[#000] px-8 py-3"
              ></textarea>
            </div>
          </div>
          <button className="mt-[40px] rounded-md bg-[#191A23] px-6 py-3 text-center text-xl font-normal text-white outline-none transition duration-300 hover:bg-[#b9ff66] hover:text-[#191a23] md:w-max lg:mt-8">
            Send Message
          </button>
        </form>
        <div className="z-20 hidden flex-col gap-4 lg:flex">
          <img
            src="/images/contact-1.svg"
            alt="big star vector"
            className="max-w-[70%]"
          />
          <img
            src="/images/contact-2.svg"
            alt="small star vector"
            className="max-w-[40%]"
          />
        </div>
        <img
          src="images/contact-3.svg"
          alt="Mask group"
          className="absolute right-[-20%] top-[10%] hidden h-[500px] lg:block"
        />
      </div>
    </section>
  );
}

export default Contact;
