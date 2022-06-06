import React from 'react';
import useAllImgFiles from '../custom_hooks/use_all_img_files';
import filterNodeImages from '../utils/filter_node_images';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { scrollXStyle } from '../shared_styles/scroll_x_axis';
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
              relativePath
              id
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
  let allImgFiles = useImages();
  let filteredClientNodeImages = filterNodeImages('clientLogo', allImgFiles);


  let clientImgList = filteredClientNodeImages.map(({ childImageSharp, relativePath, id }) => {
    let gatsbyImageData = getImage(childImageSharp);
    return (
      <li key={id} css={css`margin-left: 10px; margin-right: 10px;`}>
        <GatsbyImage image={gatsbyImageData} alt={relativePath} />
      </li>
    );
  });

  return <ul css={[scrollXStyle, style]}>{clientImgList}</ul>

}



export default Clients;