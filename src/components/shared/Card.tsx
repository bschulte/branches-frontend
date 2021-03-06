import React, { HTMLAttributes } from "react";

export const Card = ({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`bg-white overflow-hidden shadow sm:rounded-lg ${className}`}
      {...props}
    >
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};
