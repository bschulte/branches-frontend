import React, { HTMLProps } from "react";
import { getColor } from "../../services/util.service";
import { Color } from "../../types";

interface IBadgeProps {
  color?: Color;
}

export const Badge = ({
  children,
  color = "default",
  className = ""
}: HTMLProps<HTMLSpanElement> & IBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium leading-5 bg-${getColor(
        color
      )}-100 text-gray-800 ${className}`}
    >
      {children}
    </span>
  );
};
