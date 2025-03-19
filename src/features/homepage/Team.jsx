import { FaLinkedinIn } from "react-icons/fa6";

const teamContent = [
  {
    image: "/images/team-1.svg",
    name: "John Smith",
    title: "CE0 and founder",
    note: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    image: "/images/team-2.svg",
    name: "Jane Doe",
    title: "Director of Operations",
    note: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    image: "/images/team-3.svg",
    name: "Micheal Brown",
    title: "Senior SEO Specialist",
    note: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    image: "/images/team-4.svg",
    name: "Emily Johnson",
    title: "PPC Manager",
    note: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    image: "/images/team-5.svg",
    name: "Brain Williams",
    title: "Social Media specialist",
    note: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    image: "/images/team-6.svg",
    name: "Sarah Kim",
    title: "Content Creator",
    note: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

function Team() {
  return (
    <section className="app-container mt-10 pb-10">
      <header className="flex flex-col items-center gap-8 lg:flex-row lg:justify-start lg:gap-12">
        <h1 className="rounded-md bg-[#B9FF66] px-2 py-1 text-2xl font-medium text-black lg:text-4xl">
          Team
        </h1>
        <p className="w-full max-w-[500px] text-[18px] font-normal leading-[22.97px] text-black lg:max-w-[580px]">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </header>
      <div className="mt-[50px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamContent.map((content, index) => (
          <div
            key={index}
            className="rounded-[30px] border border-b-[6px] border-[#000] px-8 py-4 transition-all duration-300 hover:scale-105"
          >
            <div className="flex justify-between">
              <div className="flex items-end gap-4">
                <img
                  src={content.image}
                  alt={content.name}
                  className="w-[20%]"
                  width="100%"
                  height="100%"
                />
                <div>
                  <p className="font-medium">{content.name}</p>
                  <p className="font-normal">{content.title}</p>
                </div>
              </div>
              <p className="flex aspect-square h-[30px] items-center justify-center rounded-full bg-[#000] text-base text-[#b9ff66]">
                <FaLinkedinIn />
              </p>
            </div>
            <div className="mt-[20px] border-t border-[#000]">
              <p className="mt-[20px] text-lg font-normal">{content.note}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <button className="w-full rounded-md bg-[#191A23] px-10 py-2 text-center text-xl font-normal text-white outline-none transition-all duration-300 hover:scale-105 hover:bg-[#b9ff66] hover:text-[#191a23] md:w-max lg:mt-8">
          See all team
        </button>
      </div>
    </section>
  );
}

export default Team;
