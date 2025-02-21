import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaXmark } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// bg-[#b9ff66]
const links = [
  { name: "About Us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Use Cases", to: "/usecases" },
  { name: "Pricing", to: "/pricing" },
  { name: "Blog", to: "/blog" },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const timeline = gsap.timeline({
    onStart: () => {
      if (isOpen) {
        document.body.classList.add("overflow-hidden");
      }
    },
    onComplete: () => {
      if (!isOpen) {
        document.body.classList.remove("overflow-hidden");
      }
    },
  });
  useGSAP(
    function () {
      if (isOpen) {
        timeline.from("#link", {
          y: 150,
          ease: "power4.inOut",
          duration: 1.5,
          stagger: 0.2,
        });
      }
    },
    { dependencies: [isOpen] },
  );

  return (
    <>
      {/* Desktop */}
      <nav className="relative mt-4 hidden w-full py-2 lg:block">
        <div className="app-container flex items-center justify-between">
          <Logo />
          <ul className="relative flex items-center gap-8 text-xl">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to} className="nav-hover-btn block">
                  {link.name}
                </NavLink>
              </li>
            ))}
            <button className="rounded-md border border-[#191a23] px-4 py-2 transition duration-300 hover:border-[#b9ff66] hover:bg-[#b9ff66] hover:text-white">
              Request a quote
            </button>
          </ul>
        </div>
      </nav>
      {/* Mobile */}
      <nav className="relative mt-4 w-full lg:hidden">
        <div className="app-container flex items-center justify-between">
          <h1>
            <Link to="/" className="flex gap-2 text-2xl font-medium text-black">
              <img
                src="/images/logo.png"
                alt="logo"
                className="h-[28px] w-[28px]"
              />
              <span>Positivus</span>
            </Link>
          </h1>
          <div
            role="button"
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu className="text-2xl font-extrabold" />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="mask-clip-path fixed inset-0 z-50 h-screen w-full overflow-hidden bg-white">
          <header className="app-container mt-4 flex w-full items-center justify-between">
            <Logo />
            <div
              role="button"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <FaXmark className="text-2xl font-extrabold" />
            </div>
          </header>
          <div className="app-container mt-16 flex w-full flex-col items-center gap-6">
            {links.map((link, index) => (
              <div key={index} className="mask-clip-path">
                <NavLink
                  id="link"
                  className="link inline-block text-center text-[13vw] uppercase sm:text-[12vw]"
                  to={link.to}
                >
                  {link.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
