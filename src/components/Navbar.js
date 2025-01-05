import React from "react";
import JSONViewer from "./JSONViewer";

const Navbar = ({ blocks }) => {
  const [showJSON, setShowJSON] = React.useState(false);

  return (
    <nav className="navbar">
      <p>ZINO TASK </p>
     
      <button onClick={() => setShowJSON(!showJSON)}>View JSON</button>
      {showJSON && <JSONViewer blocks={blocks} />}
    </nav>
  );
};

export default Navbar;
