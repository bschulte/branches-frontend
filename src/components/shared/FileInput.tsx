import React, { HTMLAttributes, useState, SyntheticEvent } from "react";
import { v4 as uuid } from "uuid";
import classnames from "classnames";

import { primaryColor } from "../../config";

interface IFileInputProps {
  onSend: (file: File) => void;
}

export const FileInput = ({
  className,
  onSend
}: HTMLAttributes<HTMLInputElement> & IFileInputProps) => {
  const uniqueId = uuid();

  const [file, setFile] = useState<File | null>(null);

  const _setFile = (fileList: FileList | null) => {
    if (fileList) {
      console.log("Setting to file:", fileList[0]);
      setFile(fileList[0]);
    }
  };

  const onInputClick = (e: SyntheticEvent) => {
    if (file) {
      e.preventDefault();
      onSend(file);
    }
  };

  return (
    <div className={classnames(className, "my-3")}>
      <input
        type="file"
        id={uniqueId}
        className="hidden"
        onChange={e => _setFile(e.target.files)}
      />
      <label
        onClick={onInputClick}
        htmlFor={uniqueId}
        className={classnames(
          "border-blue-600",
          "border",
          `text-${primaryColor}-600`,
          "py-3",
          "px-3",
          "cursor-pointer",
          `border-${primaryColor}-800`,
          `hover:bg-${primaryColor}-500`,
          `hover:text-white`,
          "transition-colors",
          "duration-300",
          "rounded"
        )}
      >
        {file ? `Submit: ${file.name}` : "Choose a file"}
      </label>
    </div>
  );
};
