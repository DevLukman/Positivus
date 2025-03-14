import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="lg:app-container mt-[50px]">
      <div className="bg-[#191a23] px-10 pb-20 lg:rounded-[15px]">
        <FooterNav />
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div>
            <div className="flex items-center justify-center lg:items-start lg:justify-start">
              <h1 className="w-fit rounded-md bg-[#B9FF66] px-2 py-1 text-base font-normal text-black">
                Contact Us:
              </h1>
            </div>
            <p className="mt-[25px] text-center text-base font-normal text-[#fff] lg:text-left">
              Email: info@positivus.com
            </p>
            <p className="mt-[10px] text-center text-base font-normal text-[#fff] lg:text-left">
              Phone: 555-567-8901
            </p>
            <p className="mt-[15px] max-w-[332px] text-center text-base font-normal text-[#fff] lg:text-left">
              Address: 1234 Main St Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="mt-[35px] flex flex-col items-center gap-4 rounded-xl bg-[#292a32] px-12 py-12 lg:flex-row">
            <div>
              <input
                placeholder="Email"
                className="rounded-[10px] border border-[#f3f3f3] bg-transparent px-6 py-3"
              />
            </div>
            <button className="w-full rounded-[10px] bg-[#b9ff66] px-6 py-3 text-xs font-medium">
              Subscribe to news
            </button>
          </div>
        </div>
        <div className="mt-[50px] flex items-center justify-center gap-3 lg:hidden">
          <p className="flex aspect-square h-[30px] items-center justify-center rounded-full bg-[#fff] text-base text-[#000]">
            <FaLinkedinIn />
          </p>
          <p className="flex aspect-square h-[30px] items-center justify-center rounded-full bg-[#fff] text-base text-[#000]">
            <FaFacebook />
          </p>
          <p className="flex aspect-square h-[30px] items-center justify-center rounded-full bg-[#fff] text-base text-[#000]">
            <FaTwitter />
          </p>
        </div>
        <div className="mt-[30px] flex flex-col items-center gap-2 border-t border-t-[#f3f3f3] lg:flex-row">
          <p className="mt-[30px] font-normal text-[#fff]">
            &copy; 2023 Positivus. All Rights Reserved.
          </p>
          <p className="mt-[15px] font-normal text-[#fff] lg:mt-[30px]">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
