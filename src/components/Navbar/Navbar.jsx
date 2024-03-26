import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start max-sm:w-[50%] justify-between lg:justify-normal">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>
                  <a>Home</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/listedbook"}>
                  {" "}
                  <a>Listed Books</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/pagetoread"}>
                  {" "}
                  <a>Pages to Read</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>
                  {" "}
                  <a>Contact</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/aboutus"}>
                  {" "}
                  <a>About Us</a>
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="text-xl btn btn-ghost">Book Vib3</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <NavLink to={"/"}>
                <a>Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/listedbook"}>
                {" "}
                <a>Listed Books</a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/pagetoread"}>
                {" "}
                <a>Pages to Read</a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                {" "}
                <a>Contact</a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/aboutus"}>
                {" "}
                <a>About Us</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-1 lg:gap-3">
            <a className="px-3 py-2 lg:py-3 lg:px-6 rounded-xl bg-[#23BE0A] cursor-pointer">
              Sign In
            </a>
            <a className="px-3 py-2 lg:py-3 lg:px-6 rounded-xl bg-[#59C6D2] cursor-pointer">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
