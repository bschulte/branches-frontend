import React from "react";
import _ from "lodash";

import { HeaderRow } from "./HeaderRow";
import { DataRow } from "./DataRow";

export interface IColumn {
  label: string;
  accessor?: string;
}

export interface IDataTableProps {
  columns: IColumn[];
  data: any[];
  rowKey: string;
}

export const DataTable = ({ columns, data, rowKey }: IDataTableProps) => {
  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
        <table className="min-w-full">
          <thead>
            <HeaderRow columns={columns} />
          </thead>

          <tbody>
            {data.map(row => (
              <DataRow key={_.get(row, rowKey)} columns={columns} row={row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
