import React from "react";
import { PageContainer } from "../components/shared/PageContainer";
import { Users } from "../components/Admin/Users";
import { UploadTree } from "../components/Admin/UploadTree";

export const Admin = () => {
  return (
    <PageContainer title="Admin">
      <Users />
      <UploadTree />
    </PageContainer>
  );
};
