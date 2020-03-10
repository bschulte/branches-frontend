import React from "react";
import { Link } from "react-router-dom";
import { NavbarLink } from "./Navbar/NavbarLink";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="/img/logos/workflow-mark-on-white.svg"
                alt=""
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="/img/logos/workflow-logo-on-white.svg"
                alt=""
              />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
              <NavbarLink text="Dashboard" link={"/dashboard"} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
