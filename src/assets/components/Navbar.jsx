import React from "react";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">Arch-ZeroOne</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-lg">
            <li>
              <a>About</a>
            </li>

            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end p-3">
          <i class="fa-brands fa-github text-3xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
