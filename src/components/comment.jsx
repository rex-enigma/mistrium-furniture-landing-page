import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { starSvg } from "../assets/svgImages";
import Container from "./container";
import H4 from "./h4_heading";
import { css } from "@emotion/react";

const commentStyle = {
    flexDirctn: 'column',
    alignItems:'center',
    flex:'1 0 260px',
    margin: '30px',    
};

//style the <img>
const imgStyle = {
    clipPath: 'circle(20% at 56% 22%)',
    width: '132px',
    height:'136px',

};

//style the img wrapper <div><img></div>
const imgContStyle = {
    width: '132px',
    height:' 60px',
    marginBottom: '6px',
    
};

const dateStarContStyle = {
    flexDirctn:'row',
    justifyContent:'center',
    alignItems:'center',
    width: '100%',
};
 

const starContStyle = css`
    list-style-type: none;
    padding-left:0px;
    display:flex;
    flex-direction: row;
    margin-bottom: 8px;
    
`;

const dateStyle = css`
    margin-right: 10px;
    margin-bottom: 8px;
    color: #A9A7A6;

`;
const nameStyle ={
    marginBottom: '6px',
    color: '#3D3D3F',
};

const commentTextStyle = {
   fontWeight: '400',
   color: '#72696A',
};

 function Comment ({gatsbyImgNode, commentDataNode}) {
    return(
        <Container {...commentStyle} >
            <GatsbyImage image = {getImage(gatsbyImgNode)} imgStyle={imgStyle} style={imgContStyle} alt = {gatsbyImgNode.relativePath} />
            <H4 {...nameStyle}>{commentDataNode.name}</H4>
            <Container {...dateStarContStyle} >
                <h5 css = {dateStyle}>{commentDataNode.date}</h5>
                <ul css={starContStyle} >
                    {Array(commentDataNode.stars).fill(1,0, commentDataNode.stars).map((e,index)=>(
                        <li key ={index}>
                          <img src={starSvg} alt="" /> 
                        </li>
                    ))}
                </ul>
            </Container>
            <h5 css ={commentTextStyle}> {commentDataNode.comment} </h5>
        </Container>
    );

}

export default Comment;

//