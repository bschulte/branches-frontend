import React, { HTMLAttributes } from "react";
import classnames from "classnames";
import { getColor } from "../../services/util.service";
import { Color } from "../../types";

interface IButtonProps {
  color?: Color;
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  color = "primary",
  size = "md",
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement> & IButtonProps) => {
  const tailwindColor = getColor(color);

  let sizeClasses;
  if (size === "sm") {
    sizeClasses = "py-1 px-2";
  }
  if (size === "md") {
    sizeClasses = "py-2 px-4";
  }
  if (size === "lg") {
    sizeClasses = "py-4 px-8";
  }

  return (
    <button
      className={classnames(
        sizeClasses,
        `bg-${tailwindColor}-500`,
        `hover:bg-${tailwindColor}-700`,
        "text-white",
        "border",
        `border-${tailwindColor}-700`,
        "rounded",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
