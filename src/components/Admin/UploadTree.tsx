import React from "react";
import { Card } from "../shared/Card";
import { FileInput } from "../shared/FileInput";
import { networkService } from "../../services/network.service";

export const UploadTree = () => {
  const uploadFile = async (file: File) => {
    console.log("Uploading file:", file);

    const response = await networkService.postFile("/family-tree", file);
    console.log("response from server:", response);
  };

  return (
    <Card className="mt-3">
      <p>Upload Tree</p>

      <FileInput onSend={uploadFile} />
    </Card>
  );
};
