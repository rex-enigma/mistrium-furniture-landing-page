import React from 'react';
import filterNodeImages from '../utils/filter_node_images';
import useAllImgFiles from '../custom_hooks/use_all_img_files';
import useAllFeaturedProductDataNode from '../custom_hooks/use_all_featured_product_data_node';
import associateData from '../utils/associate_data';
import scrollXStyle from '../shared_styles/scroll_x_axis';
import Container from './container';
import H4 from './h4_heading';
import { css } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


const style = css`
  margin-bottom: 53px;
`;


function FeaturedPrds() {
  let allImgFiles = useAllImgFiles();
  let filteredFeaturedProductNodeImages = filterNodeImages('featuredFurniture', allImgFiles);
  let featuredProductDataNodes = useAllFeaturedProductDataNode();
  let featuredProductDataList = associateData(filteredFeaturedProductNodeImages, featuredProductDataNodes);

  let featuredProductList = featuredProductDataList.map(featuredProductData => {
    let featuredProductDataNode = featuredProductData.dataNode;
    return (
      <Container key={featuredProductDataNode.id} height={112} alignItems='center' padding='8px' css={css`background-color: ${featuredProductDataNode.bgColor}`}>
        <Container flexDirctn='column' justifyContent='center' >
          <H4>{featuredProductData.dataNode.name}</H4>
          <H4 fontSize='12px' fontWeight='600'>Browser Collection</H4>
        </Container>
        <GatsbyImage image={getImage(featuredProductData.gatsbyImgNode)} imgStyle={{maxWidth: '200px', height:'auto'}}  alt = {featuredProductData.gatsbyImgNode.relativePath}/>
      </Container>
    );
  });

  return <Container css={[scrollXStyle, style]}>{featuredProductList}</Container>

}


export default FeaturedPrds;