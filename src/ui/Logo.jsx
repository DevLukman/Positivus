import { Link } from "react-router-dom";

function Logo() {
  return (
    <h1>
      <Link to="/" className="flex gap-2">
        <img src="/images/logo.png" alt="logo" className="h-[28px] w-[28px]" />
        <span className="text-2xl font-medium text-black lg:text-2xl">
          Positivus
        </span>
      </Link>
    </h1>
  );
}

export default Logo;
