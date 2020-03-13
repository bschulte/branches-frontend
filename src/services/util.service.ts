/**
 * Get the TailwindCSS color for the given color to the component
 *
 * @param color Color string for the component
 */
export type Color = "primary" | "default" | "success" | "warning" | "error";

export const getColor = (color: Color) => {
  if (color === "default") {
    return "gray";
  }
  if (color === "success") {
    return "green";
  }
  if (color === "warning") {
    return "yellow";
  }
  if (color === "error") {
    return "red";
  }

  return "gray";
};
