import React from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

interface INavbarLinkProps {
  text: string;
  link: string;
}

export const NavbarLink = ({ text, link }: INavbarLinkProps) => {
  const location = useLocation();
  console.log("location:", location);

  const activeClasses =
    "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out";
  const inactiveClasses =
    "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out";

  const isActive = location.pathname.startsWith(link);

  const classNames = ["mx-2"];
  if (isActive) {
    classNames.push(activeClasses);
  } else {
    classNames.push(inactiveClasses);
  }

  return (
    <Link to={link} className={classnames(classNames)}>
      {text}
    </Link>
  );
};
