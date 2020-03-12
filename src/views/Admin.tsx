import React from "react";
import { PageContainer } from "../components/shared/PageContainer";
import { Users } from "../components/Admin/Users";

export const Admin = () => {
  return (
    <PageContainer title="Admin">
      <Users />
    </PageContainer>
  );
};
