import React from "react";

const Navbar = () => {
  return (
    <div className="drawer fixed z-50" id="navbar">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-24 uppercase  text-2xl md:text-4xl font-bold font-abc text-blue-600">
            <span className="text-blue-950">pat</span>rick
          </div>
          <div className="hidden flex-none mr-10 uppercase lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#skills">skills</a>
              </li>
              <li>
                <a href="#projects">projects</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile design */}
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 font-abc uppercase min-h-full w-80 p-4">
          <li>
            <div className="mx-2 flex-1 px-2 uppercase text-2xl md:text-4xl font-bold font-abc text-blue-600">
              <span className="text-blue-950">pat</span>rick
            </div>
          </li>
          <p className="lowercase  px-5">
            Let's build something legendary together
          </p>
          <hr className="mb-14 mt-5" />
          {/* Sidebar content here */}
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#resume">resume</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
          <li>
            <p className="text-blue-600 mt-14 px-20">Let's connect</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
