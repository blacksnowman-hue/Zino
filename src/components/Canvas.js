import React from "react";
import { useDrop } from "react-dnd";
import Block from "./Block";

const Canvas = ({ blocks, setBlocks }) => {
  const [, dropRef] = useDrop({
    accept: "block",
    drop: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      if (offset) {
        setBlocks((prevBlocks) =>
          prevBlocks.map((block) =>
            block.id === item.id
              ? {
                  ...block,
                  position: {
                    top: offset.y - block.size.height / 2, // Adjust for block center
                    left: offset.x - block.size.width / 2, // Adjust for block center
                  },
                }
              : block
          )
        );
      }
    },
  });

  return (
    <div
      ref={dropRef}
      className="canvas"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#f0f0f0",
        overflow: "hidden",
        cursor: "pointer", // Makes it feel more interactive
      }}
    >
      {blocks.map((block) => (
        <Block key={block.id} block={block} setBlocks={setBlocks} />
      ))}
    </div>
  );
};

export default Canvas;
