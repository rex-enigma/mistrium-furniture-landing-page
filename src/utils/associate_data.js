import React from "react";

export default function associateData(filteredNodeImgs, dataNodes) {
  let associatedDataList = filteredNodeImgs.map((imgNode) => {
    let dataNode;

    //this technique is slow since we will have to iterate over the rest of the array even when the first element passes the condition(refactor this later).
    dataNodes.forEach((data_Node) => {
      if (imgNode.name === data_Node.key) {
        dataNode = data_Node;
      }
    });

    //named this returned object 'associatedData'(img with its associated data) coz it contain the required data for component.
    return {
      gatsbyImgNode: imgNode,
      dataNode: dataNode,
    };
  });

  return associatedDataList;
}

// export default function associateData(filteredNodeImgs, dataNodes) {
//     let associatedDataList = filteredNodeImgs.map((imgNode) => {
//       let dataNode;

//       //this technique is slow since we will have to iterate over the rest of the array even when the first element passes the condition(refactor this later).
//       dataNodes.forEach((data_Node) => {
//         if (imgNode.name === data_Node.key) {
//           dataNode = data_Node;
//         }
//       });

//       let imgData = getImage(imgNode);
//       let imgComponent = (
//         <GatsbyImage image={imgData} alt={imgNode.relativePath} />
//       );

//       //named this returned object 'associatedData'(img with its associated data) coz it contain the required data for component.
//       return {
//         gatsbyImgComponent: imgComponent,
//         dataNode: dataNode,
//       };
//     });

//     return associatedDataList;
//   }
