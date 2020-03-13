import React from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import moment from "moment";

import { Card } from "../shared/Card";
import { DataTable } from "../shared/DataTable/DataTable";
import { IUser } from "../../interfaces/IUser";
import { Button } from "../shared/Button";

const GET_USERS = gql`
  {
    adminUsers {
      id
      email
      name
      createdAt
      approved
    }
  }
`;

const UPDATE_USER = gql`
  mutation($userInput: UserInputDto!) {
    adminUpdateUser(userInput: $userInput) {
      id
      approved
    }
  }
`;

export const Users = () => {
  const { data } = useQuery(GET_USERS);
  const [updateUser] = useMutation(UPDATE_USER);

  const users = data ? data.adminUsers : [];

  const toggleApproved = async (user: IUser) => {
    console.log("Updating approved");
    await updateUser({
      variables: { userInput: { approved: !user.approved, id: user.id } }
    });
  };

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
          },
          {
            label: "Approved",
            component: (approved, user) =>
              approved ? (
                <Button color="success" onClick={() => toggleApproved(user)}>
                  YES
                </Button>
              ) : (
                <Button color="error" onClick={() => toggleApproved(user)}>
                  NO
                </Button>
              ),
            accessor: "approved"
          }
        ]}
        data={users}
      />
    </Card>
  );
};
