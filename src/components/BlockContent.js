import React from "react";
import { useDrag } from "react-dnd";

const BlockContent = ({ child }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "content",
    item: { id: child.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const styles = {
    cursor: isDragging ? "grabbing" : "grab",
    opacity: isDragging ? 0.5 : 1,
    transition: "opacity 0.3s ease",
  };

  return (
    <div ref={dragRef} style={styles}>
      {child.type === "text" ? <p>{child.content}</p> : <img src={child.src} alt="child" width="100" />}
    </div>
  );
};

export default BlockContent;
