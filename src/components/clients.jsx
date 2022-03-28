import React from 'react';
import {css} from '@emotion/react';
import { accentureLogo, googleLogo, ibmLogo, deloitteLogo, samsungLogo, stripeLogo } from '../assets/svgImages';
import {StaticImage} from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';


const clientsStyle = css`
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

const clients = [stripeLogo, googleLogo, deloitteLogo, accentureLogo, ibmLogo, samsungLogo ];

function ClientList() {
1
const data = useStaticQuery(graphql`
query {
  allFile {
    edges {
      node {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}

`);


console.log(data);

    const clientList = clients.map((clientLogo)=>(
        <li key={clientLogo} css = {css`margin-right: 15px`}>
            <StaticImage src= '../assets/images/google-logo.jpg' alt=""  />
        </li>
    ));

    return (<ul css = {clientsStyle}>{clientList}</ul>)
    
}


export default ClientList;