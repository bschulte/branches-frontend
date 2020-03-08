import React from "react";

interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  return <div className="text-4xl">{text}</div>;
};
