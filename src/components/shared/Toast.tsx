import React from "react";
import { ToastProps } from "react-toast-notifications";
import classnames from "classnames";

export const Toast = ({ appearance = "info", children }: ToastProps) => {
  let color;
  if (appearance === "info") {
    color = "blue";
  }
  if (appearance === "warning") {
    color = "orange";
  }
  if (appearance === "error") {
    color = "red";
  }

  return (
    <div
      className={classnames(
        `bg-${color}-600`,
        "border-l-4",
        `border-${color}-800`,
        "p-4",
        "text-white",
        "rounded",
        "shadow",
        "min-w-full"
      )}
      style={{ width: "20rem" }}
      role="alert"
    >
      {children}
    </div>
  );
};
