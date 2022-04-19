import React from 'react';
import { getFilteredImages, scrollXStyle } from './getImages';
import { css } from '@emotion/react';
import { useStaticQuery, graphql } from 'gatsby';




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


const style = css`
  margin-bottom: 49px;
`;

function Clients() {

  let listItems = getFilteredImages('clientLogo', useImages).map((gatsbyImage, index) => {
    return (
      <li key={index} css={css`margin-left: 15px`}>
        {gatsbyImage}
      </li>
    );
  });

  return <ul css={[scrollXStyle, style]}>{listItems}</ul>

}



export default Clients;