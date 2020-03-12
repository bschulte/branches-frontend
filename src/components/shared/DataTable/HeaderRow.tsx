import React from "react";
import classnames from "classnames";

import { IColumn } from "./DataTable";

export const HeaderRow = ({ columns }: { columns: IColumn[] }) => {
  return (
    <tr>
      {columns.map(col => (
        <th
          key={col.label}
          className={classnames(
            "px-6",
            "py-3",
            "border-b",
            "border-gray-200",
            "bg-gray-50",
            "text-left",
            "text-xs",
            "leading-4",
            "font-medium",
            "text-gray-500",
            "uppercase",
            "tracking-wider"
          )}
        >
          {col.label}
        </th>
      ))}
    </tr>
  );
};
