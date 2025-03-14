import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const links = [
  { name: "About Us", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Use Cases", to: "/usecases" },
  { name: "Pricing", to: "/pricing" },
  { name: "Blog", to: "/blog" },
];
function FooterNav() {
  return (
    <nav className="flex flex-col items-center justify-between py-8 lg:flex-row">
      <h1>
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo-2.png"
            alt="logo"
            className="h-[25px] w-[25px]"
          />
          <span className="text-xl font-medium text-[#fff]">Positivus</span>
        </Link>
      </h1>
      <ul className="relative mt-[30px] flex flex-col items-center gap-4 text-xl lg:flex-row">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.to}
              className="block text-lg font-normal text-[#fff] lg:underline"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="hidden items-center gap-3 lg:flex">
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
    </nav>
  );
}

export default FooterNav;
