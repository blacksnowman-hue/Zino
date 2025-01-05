import React, { useState } from "react";

const EditableText = ({ content, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleBlur = (e) => {
    onUpdate(e.target.innerText);
    setIsEditing(false);
  };

  return (
    <div
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onClick={() => setIsEditing(true)}
      onBlur={handleBlur}
      style={{
        cursor: "text",
        border: isEditing ? "1px dashed #aaa" : "none",
        padding: "4px",
      }}
    >
      {content}
    </div>
  );
};

export default EditableText;
