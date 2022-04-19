import React from 'react';
import { getFilteredImages, scrollXStyle } from './getImages';
import Container from './container';
import H4 from './h4_heading';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/react';
import { furnitureData } from '../data';



function useImages() {

  const data = useStaticQuery(graphql`
        query  {
          allFile {
            edges {
              node {
                childImageSharp {
                  gatsbyImageData
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


function FeaturedPrds() {

  let listItems = getFilteredImages('featuredFurniture', useImages).map((gatsbyImage, index) => {
    return (
      <Container key={index} height={112} alignItems='center' padding='8px' css={css`background-color: ${furnitureData[index].bgColor}`}>
        <Container flexDirctn='column' justifyContent='center' >
          <H4>{furnitureData[index].title}</H4>
          <H4 fontSize='12px' fontWeight='600'>Browser Collection</H4>
        </Container>
        {gatsbyImage}
      </Container>
    );
  });

  return <Container css={scrollXStyle}>{listItems}</Container>

}


export default FeaturedPrds;