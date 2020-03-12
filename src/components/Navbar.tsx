import React from "react";
import { NavbarLink } from "./Navbar/NavbarLink";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/IRootState";

export const Navbar = () => {
  const { user } = useSelector((state: IRootState) => state.auth);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <NavbarLink text="Dashboard" link={"/dashboard"} />
            {user?.isAdmin && <NavbarLink text="Admin" link={"/admin"} />}
          </div>
          <div className="flex items-center">{user?.email}</div>
        </div>
      </div>
    </nav>
  );
};
