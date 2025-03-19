import { Link } from "react-router-dom";

function Logo() {
  return (
    <h1>
      <Link to="/" className="flex gap-2">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="h-[28px] w-[28px]"
          width="100%"
          height="100%"
        />
        <span className="text-2xl font-medium text-black lg:text-2xl">
          Positivus
        </span>
      </Link>
    </h1>
  );
}

export default Logo;
