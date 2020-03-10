import React from "react";
import { Link } from "react-router-dom";

interface INavbarLinkProps {
  text: string;
  link: string;
}

export const NavbarLink = ({ text, link }: INavbarLinkProps) => {
  return (
    <Link
      to={link}
      className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
    >
      {text}
    </Link>
  );
};
