import React from "react";

const Sidebar = ({ blocks, setBlocks, draggedImage, setDraggedImage }) => {
  // Handle adding a new block to the canvas
  const addBlock = () => {
    const newBlockPosition = {
      top: blocks.length * 220,  // Position the new block 220px down
      left: blocks.length * 320, // Position the new block 320px to the right
    };

    const newBlock = {
      id: `block_${Date.now()}`,
      type: "block",
      position: newBlockPosition,
      size: { width: 300, height: 300 },
      children: [],
    };

    setBlocks((prevBlocks) => [...prevBlocks, newBlock]);
  };

// Handle adding text dynamically inside a block
const addText = (blockId) => {
  setBlocks((prevBlocks) =>
    prevBlocks.map((block) => {
      if (block.id === blockId) {
        const childCount = block.children.length;
        const newText = {
          id: `text_${Date.now()}`,
          type: "text",
          content: "New Text",
          position: {
            top: 20 + childCount * 30, // Adjust dynamically based on existing elements
            left: 20 + (childCount % 3) * 50, // Alternate left position
          },
        };
        return { ...block, children: [...block.children, newText] };
      }
      return block;
    })
  );
};

// Handle adding an image dynamically inside a block
const addImage = (blockId) => {
  setBlocks((prevBlocks) =>
    prevBlocks.map((block) => {
      if (block.id === blockId) {
        const childCount = block.children.length;
        const newImage = {
          id: `image_${Date.now()}`,
          type: "image",
          src: draggedImage || "https://via.placeholder.com/100",
          position: {
            top: 20 + childCount * 30, // Adjust dynamically based on existing elements
            left: 20 + (childCount % 3) * 50, // Alternate left position
          },
        };
        return { ...block, children: [...block.children, newImage] };
      }
      return block;
    })
  );
};


  return (
    <aside className="sidebar">
      {/* Button to add a new block */}
      <button onClick={addBlock} className="add-block">
        Add New Block
      </button>

      {/* Render existing blocks */}
      {blocks.map((block) => (
        <div key={block.id} className="block-container">
          <div className="block-id">{block.id}</div>
          <ul>
            <li>
              <button
                onClick={() => addImage(block.id)}
                className="drop"
              >
                Add Image
              </button>
            </li>
            <li>
              <button
                onClick={() => addText(block.id)}
                className="drop"
              >
                Add Text
              </button>
            </li>
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
