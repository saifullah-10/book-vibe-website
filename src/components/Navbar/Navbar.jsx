import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 font-['Work_Sans']">
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
                  <a className="text-base font-semibold lg:text-lg">Home</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/listedbook"}>
                  {" "}
                  <a className="text-base font-semibold lg:text-lg">
                    Listed Books
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/pagetoread"}>
                  {" "}
                  <a className="text-base font-semibold lg:text-lg">
                    Pages to Read
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>
                  {" "}
                  <a className="text-base font-semibold lg:text-lg">Contact</a>
                </NavLink>
              </li>
              <li>
                <NavLink to={"/aboutus"}>
                  {" "}
                  <a className="text-lg font-semibold">About Us</a>
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="text-xl btn btn-ghost text-[#131313] lg:text-3xl font-bold">
            E-Book Store
          </a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <NavLink to={"/"}>
                <a className="text-base font-semibold lg:text-lg">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/listedbook"}>
                {" "}
                <a className="text-base font-semibold lg:text-lg">
                  Listed Books
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/pagetoread"}>
                {" "}
                <a className="text-base font-semibold lg:text-lg">
                  Pages to Read
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>
                {" "}
                <a className="text-base font-semibold lg:text-lg">Contact</a>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/aboutus"}>
                {" "}
                <a className="text-base font-semibold lg:text-lg">About Us</a>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-1 lg:gap-3">
            <a className="px-3 text-white py-2 lg:py-3 lg:px-6 rounded-xl bg-[#23BE0A] cursor-pointer text-base font-semibold lg:text-lg">
              Sign In
            </a>
            <a className="px-3 text-white py-2 lg:py-3 lg:px-6 rounded-xl bg-[#59C6D2] cursor-pointer text-base font-semibold lg:text-lg">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
