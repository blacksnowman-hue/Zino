import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import JSONViewer from "./components/JSONViewer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";

const App = () => {
  const [blocks, setBlocks] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);
  const [showJSON, setShowJSON] = useState(false);

  // Handle adding text dynamically inside a block
  const addText = (blockId) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === blockId
          ? {
              ...block,
              children: [
                ...block.children,
                {
                  id: `text_${Date.now()}`,
                  type: "text",
                  content: "New Text",
                  position: {
                    top: 20 + block.children.length * 30, // Adjust dynamically
                    left: 20 + (block.children.length % 3) * 50,
                  },
                },
              ],
            }
          : block
      )
    );
  };

  // Handle adding an image dynamically inside a block
  const addImage = (blockId) => {
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === blockId
          ? {
              ...block,
              children: [
                ...block.children,
                {
                  id: `image_${Date.now()}`,
                  type: "image",
                  src: draggedImage || "https://via.placeholder.com/100",
                  position: {
                    top: 20 + block.children.length * 30,
                    left: 20 + (block.children.length % 3) * 50,
                  },
                },
              ],
            }
          : block
      )
    );
  };

  const toggleJSON = () => setShowJSON((prevState) => !prevState);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Navbar blocks={blocks} />
        <div className="main-container">
          <Sidebar
            blocks={blocks}
            setBlocks={setBlocks}
            draggedImage={draggedImage}
            setDraggedImage={setDraggedImage}
            addText={addText} // Pass addText as a prop
            addImage={addImage} // Pass addImage as a prop
          />
          <Canvas blocks={blocks} setBlocks={setBlocks} draggedImage={draggedImage} />
        </div>
        <button onClick={toggleJSON}>View JSON</button>
        {showJSON && <JSONViewer blocks={blocks} />}
      </div>
    </DndProvider>
  );
};

export default App;
