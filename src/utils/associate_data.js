import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


  export default function associateData(filteredNodeImgs, dataNodes){

    let associatedDataList = filteredNodeImgs.map(imgNode => {
        let dataNode;

        dataNodes.forEach(data_Node => {
            if(imgNode.name === data_Node.key){
                dataNode = data_Node;
            }
        });
        
        let imgData = getImage(imgNode);
        let imgComponent = <GatsbyImage image = {imgData} alt ={imgNode.relativePath}/>;
        
        //named this returned object 'associatedData'(img with its associated data) coz it contain the required data for component.
        return {
            gatsbyImgComponent: imgComponent,
            dataNode: dataNode,
        };
    });

    return associatedDataList;
  }