import React, { HTMLProps } from "react";
import classnames from "classnames";

export const Input = ({
  value,
  onChange,
  className = "",
  ...props
}: HTMLProps<HTMLInputElement>) => {
  return (
    <input
      {...props}
      value={value}
      onChange={onChange}
      className={classnames(
        "bg-white",
        "focus:outline-none",
        "focus:shadow-outline",
        "border",
        "border-gray-300",
        "rounded-lg",
        "py-2",
        "px-4",
        "my-2",
        "block",
        className
      )}
    ></input>
  );
};
