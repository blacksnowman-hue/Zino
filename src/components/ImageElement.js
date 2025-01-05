import React from "react";
import { useDropzone } from "react-dropzone";

const EditableImage = ({ src, onUpdate }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        onUpdate(e.target.result); // Update image source
      };

      reader.readAsDataURL(file);
    },
  });

  return (
    <div
      {...getRootProps()}
      style={{
        position: "relative",
        cursor: "pointer",
        display: "inline-block",
        border: "1px dashed #aaa",
        padding: "4px",
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <input {...getInputProps()} />
      <img
        src={src}
        alt="Editable"
        style={{
          display: "block",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
};

export default EditableImage;
