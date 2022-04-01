import React from 'react';
import { getImages, scrollXStyle } from './getImages';
import { css } from '@emotion/react';



function Clients() {

  let listItems = getImages('clientLogo').map((gatsbyImage, index) => {
    return (
      <li key={index} css={css`margin-left: 15px`}>
        {gatsbyImage}
      </li>
    );
  });

  return <ul css={scrollXStyle}>{listItems}</ul>

}



export default Clients;