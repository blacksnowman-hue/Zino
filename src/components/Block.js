import React from "react";
import { useDrag } from "react-dnd";
import { ResizableBox } from "react-resizable";

const BlockContent = ({ child }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "content",
    item: { id: child.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        opacity: isDragging ? 0.5 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      {child.type === "text" ? (
        <p>{child.content}</p>
      ) : (
        <img src={child.src} alt="child" width="100" />
      )}
    </div>
  );
};

const Block = ({ block, setBlocks }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "block",
    item: { id: block.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleResizeStop = (e, data) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((b) =>
        b.id === block.id
          ? { ...b, size: { width: data.size.width, height: data.size.height } }
          : b
      )
    );
  };

  return (
    <div
      ref={dragRef}
      style={{
        position: "absolute",
        top: block.position.top,
        left: block.position.left,
        opacity: isDragging ? 0.5 : 1,
        zIndex: 1,
        transition: isDragging ? "none" : "top 0.2s, left 0.2s",
        transform: isDragging ? `translate(${block.position.left}px, ${block.position.top}px)` : "none",
      }}
    >
      <ResizableBox
        width={block.size.width}
        height={block.size.height}
        minConstraints={[150, 150]}
        maxConstraints={[600, 600]}
        resizeHandles={["se"]}
        onResizeStop={handleResizeStop}
      >
        <div
          className="block"
          style={{
            position: "relative",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            overflow: "hidden",
          }}
        >
          <h3>Block</h3>
          {block.children.map((child) => (
            <BlockContent key={child.id} child={child} />
          ))}
        </div>
      </ResizableBox>
    </div>
  );
};

export default Block;
