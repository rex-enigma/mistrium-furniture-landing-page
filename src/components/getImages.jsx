import React from 'react';
import { css } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';


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


function useImages() {

    const data = useStaticQuery(graphql`
      query  {
        allFile {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
              extension
              relativePath
            }
          }
        }
      }
      `);


    return data;

}

// imageType: 'commentAvatar' or 'clientLogo'.
// useStaticQuery must be called on a react function component or a in a custom hook function
// name of react function component must start with a capital letter.

function GetImages(imageType) {

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

export function getImages(imageType) {
    return GetImages(imageType);
}





