const AccordionContent = [
  {
    id: "1",
    header: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "2",
    header: "Research and Strategy Development",
    text: "Based on the insights gathered during our consultation, we will create a detailed marketing strategy tailored to your business objectives. This plan will specify the marketing channels, approaches, and content types to be utilized in effectively engaging your target audience.",
  },
  {
    id: "3",
    header: "Implementation",
    text: "Once the strategy is in place, we will begin implementing the marketing plan. This may involve creating and optimizing content for various channels, managing social media accounts, running paid advertising campaigns, and more.",
  },
  {
    id: "4",
    header: "Monitoring and Optimization",
    text: "We will continuously monitor the performance of your marketing efforts and make adjustments as needed. This may involve adjusting the content, targeting, or budget of your campaigns to ensure maximum impact.",
  },
  {
    id: "5",
    header: "Reporting and Communication",
    text: "We will provide regular reports on the performance of your marketing efforts. These reports will include metrics such as website traffic, engagement, and conversions. This information will help us identify areas for improvement and make data-driven decisions.",
  },
  {
    id: "6",
    header: "Continual Improvement",
    text: "Our services are not limited to just the initial consultation and implementation. We offer ongoing support and maintenance to ensure that your marketing efforts continue to be effective and aligned with your business goals.",
  },
];
/* eslint-disable react/prop-types */
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

function AccordionItem() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-[30px] flex flex-col gap-6 lg:mt-[50px]">
      {AccordionContent.map((content, index) => (
        <AccordionContainer
          key={content.id}
          header={content.header}
          text={content.text}
          number={index}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  );
}
function AccordionContainer({ header, text, number, isOpen, setIsOpen }) {
  const curOpen = number === isOpen;
  function handleOpen() {
    setIsOpen(curOpen ? null : number);
  }
  return (
    <div
      className={`cursor-pointer rounded-[30px] border border-b-4 border-[#000] ${curOpen ? `bg-[#b9ff66]` : `bg-[#f3f3f3]`} px-6 py-4`}
      onClick={handleOpen}
    >
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-medium text-[#000] lg:text-5xl">
            {number < 10 ? `0${number + 1}` : number + 1}
          </span>
          <h3 className="max-w-[200px] font-medium lg:max-w-full lg:text-3xl">
            {header}
          </h3>
        </div>
        <div className="rounded-full border border-[#000] bg-[#f3f3f3] p-2">
          {curOpen ? <FaMinus role="button" /> : <FaPlus />}
        </div>
      </div>
      {curOpen && (
        <div className="mt-[20px] border-t border-[#000] pb-6">
          <p className="mt-[16px] text-base text-[#000] lg:text-lg">{text}</p>
        </div>
      )}
    </div>
  );
}
export default AccordionItem;
