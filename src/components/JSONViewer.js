import React from "react";



// const blocks = [
//   {
//     id: "block_1",
//     type: "block",
//     position: { top: 100, left: 200 },
//     size: { height: 200, width: 300 },
//     children: [
//       {
//         id: "text_1",
//         type: "text",
//         content: "This is a text label",
//         position: { top: 50, left: 50 },
//       },
//       {
//         id: "image_1",
//         type: "image",
//         src: "path_to_image.jpg",
//         position: { top: 120, left: 100 },
//       },
//     ],
//   },
//   {
//     id: "block_2",
//     type: "block",
//     position: { top: 350, left: 500 },
//     size: { height: 250, width: 350 },
//     children: [
//       {
//         id: "text_2",
//         type: "text",
//         content: "Another text label",
//         position: { top: 80, left: 50 },
//       },
//       {
//         id: "image_2",
//         type: "image",
//         src: "path_to_image2.jpg",
//         position: { top: 160, left: 100 },
//       },
//     ],
//   },
// ];
const JSONViewer = ({ blocks }) => {
  return (
    <pre className="json-viewer">{JSON.stringify({ blocks }, null, 2)}</pre>
  );
};



export default JSONViewer;