import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import moment from "moment";

import { Card } from "../shared/Card";
import { DataTable } from "../shared/DataTable/DataTable";
import { IUser } from "../../interfaces/IUser";

const GET_USERS = gql`
  {
    adminUsers {
      id
      email
      name
      createdAt
    }
  }
`;

export const Users = () => {
  const { data } = useQuery(GET_USERS);

  const users = data ? data.adminUsers : [];

  return (
    <Card>
      <DataTable
        rowKey="id"
        columns={[
          { label: "Name", accessor: "name" },
          { label: "Email", accessor: "email" },
          {
            label: "Signup Date",
            accessor: "createdAt",
            format: createdAt => moment(createdAt).format("L - LTS")
          },
          {
            label: "Actions",
            component: (_: any, row: IUser) => <span>{row.id}</span>
          }
        ]}
        data={users}
      />
    </Card>
  );
};
