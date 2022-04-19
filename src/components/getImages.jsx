import React from 'react';
import { css } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export const scrollXStyle = css`
display: flex;
justify-content: flex-start;
align-items: center;
overflow-x: auto;
padding: 0px;
list-style-type: none;

//hide scrollbar but keep functionality
//for chrome, safari and opera
&::-webkit-scrollbar{
    display: none;
}

//hiding scrollbar for edge & firefox
-ms-overflow-style:none; // IE & edge
scrollbar-width: none; //firefox
`;


// imageType: 'commentAvatar' or 'clientLogo' or 'featuredFurniture'.
// useStaticQuery must be called on a react function component or a in a custom hook function
// name of react function component must start with a capital letter.

function GetFilteredImages(imageType, images) {

  let { allFile } = images();
  const fileEdgeList = allFile.edges;


  const filteredFileEdgeList = fileEdgeList.filter((fileEdge) => {
    var imageRelativePath = fileEdge.node.relativePath;
    return imageRelativePath.includes(imageType);
  });

  const imageList = filteredFileEdgeList.map((fileEdge) => {
    var imageData = getImage(fileEdge.node);
    return <GatsbyImage image={imageData} alt={fileEdge.node.relativePath} />
  });


  return imageList

}



//helper function

export function getFilteredImages(imageType, images) {
  return GetFilteredImages(imageType, images);
}





