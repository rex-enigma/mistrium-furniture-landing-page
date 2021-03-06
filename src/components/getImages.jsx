import React from 'react';
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

//use 'name' as key for retrieving data in map




// imageType: 'commentAvatar' or 'clientLogo' or 'featuredFurniture' or 'product'.
// useStaticQuery must be called on a react function component(function name start with a capital letter) or a in a custom hook function
// name of react function component must start with a capital letter.

function GetFilteredImages(imageType) {

  let { allFile } = useImages();
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





