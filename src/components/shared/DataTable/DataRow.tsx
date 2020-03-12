import React from "react";
import _ from "lodash";

import { IColumn } from "./DataTable";

export const DataRow = ({ columns, row }: { columns: IColumn[]; row: any }) => {
  const baseClasses =
    "px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500";
  return (
    <tr>
      {columns.map(col => {
        const val = col.accessor ? _.get(row, col.accessor) : null;

        if (col.component) {
          return <td className={baseClasses}>{col.component(val, row)}</td>;
        }

        if (col.accessor) {
          return (
            <td key={col.label} className={baseClasses}>
              {col.format ? col.format(val) : val}
            </td>
          );
        } else {
          return <td key={col.label}></td>;
        }
      })}
    </tr>
  );
};
