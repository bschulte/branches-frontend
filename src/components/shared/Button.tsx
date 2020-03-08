import React, { HTMLAttributes } from "react";
import classnames from "classnames";

export const Button = ({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={classnames(
        "bg-blue-500",
        "hover:bg-blue-700",
        "text-white",
        "py-2",
        "px-4",
        "border",
        "border-blue-700",
        "rounded"
      )}
      {...props}
    >
      {children}
    </button>
  );
};
