import React from "react";
import { Card } from "../shared/Card";
import { FileInput } from "../shared/FileInput";

export const UploadTree = () => {
  return (
    <Card className="mt-3">
      <p>Upload Tree</p>

      <FileInput onSend={(file: File) => alert(file)} />
    </Card>
  );
};
