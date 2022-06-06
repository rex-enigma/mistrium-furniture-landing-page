import React from 'react';
import filterNodeImages from '../utils/filter_node_images';
import useAllImgFiles from '../custom_hooks/use_all_img_files';
import { useAllProductDataNode } from '../custom_hooks/use_all_product_data_node';
import associateData from '../utils/associate_data';
import Product from './product';
import Container from './container';



const productStyle = {
  flexFlow: 'row wrap',
  justifyContent: 'center',
};

//useAllImageFies will return an object that contains allFile object that contains edges
//which is a list that contains objects(fileEdges) each containing a node(image node).
//Given an imagetype and allImgFiles, filteredNodeImages will return a list of filtered image nodes
//that contain image data, this is gatsbyImageData,relativePath and name.
//associateData returns a list of associatedData{image and its associated data(dataNode)}.

function Products() {
  let allImgFiles = useAllImgFiles();
  let filteredProductNodeImages = filterNodeImages('product', allImgFiles);
  let productDataNodes = useAllProductDataNode();
  let productDataList = associateData(filteredProductNodeImages, productDataNodes)


  let productList = productDataList.map((productData) => {
    let productDataNode = productData.dataNode;
    return <Product imageComponent={productData.gatsbyImgComponent} productDataNode={productDataNode} key={productDataNode.id} />;
  });

  return (<Container {...productStyle} > {productList} </Container>);

}


export default Products

