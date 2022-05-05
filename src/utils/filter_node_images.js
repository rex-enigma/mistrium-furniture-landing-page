// imageType: 'commentAvatar' or 'clientLogo' or 'featuredFurniture' or 'product'.

export default function filterNodeImages(imageType, allImgFile) {

    let { allFile } = allImgFile;
    const fileEdgeList = allFile.edges;
  
  
    const filteredFileEdgeList = fileEdgeList.filter((fileEdge) => {
      var imageRelativePath = fileEdge.node.relativePath;
      return imageRelativePath.includes(imageType);
    });
    
    //this list contain nodes that each contains gatsbyImageData,relativePath, name, id for an image.
    const imageNodeList = filteredFileEdgeList.map((fileEdge) => {
     
      return  fileEdge.node;
    });
    
    return imageNodeList
  
  }
  
