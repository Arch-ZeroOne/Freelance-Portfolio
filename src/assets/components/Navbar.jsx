import React from "react";

function Navbar({ onClickAbout, onClickTech, onClickProj, onClickContact }) {
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li onClick={onClickAbout}>
                <a>About</a>
              </li>

              <li onClick={onClickTech}>
                <a>Technologies</a>
              </li>
              <li onClick={onClickProj}>
                <a>Projects</a>
              </li>
              <li onClick={onClickContact}>
                <a>Contacts</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Arch-ZeroOne</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-lg">
            <li onClick={onClickAbout}>
              <a>About</a>
            </li>

            <li onClick={onClickTech}>
              <a>Technologies</a>
            </li>
            <li onClick={onClickProj}>
              <a>Projects</a>
            </li>
            <li onClick={onClickContact}>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end p-3 cursor-pointer">
          <i
            class="fa-brands fa-github text-3xl"
            title="Github Profile"
            onClick={() => {
              window.location = "https://github.com/Arch-ZeroOne";
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
