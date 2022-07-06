import React from 'react';
import Container from './container';
import H4 from './h4_heading';
import Button from './button';
import {basketWhiteSvg} from '../assets/svgImages';
import { css } from '@emotion/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';



const cartButtonStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9AB82',
    border: 'none',
    color: 'white',
    width: '76%',
    borderRadius: '35px',
    padding: '11px 12px',
    position: 'relative',
    top: '-24px',
};

const basketContStyle = {
    justifyContent: 'center',
    alignItems: 'center', 
    bgColor: '#E1BC9B',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    marginLeft: '8px',
};

const basketImgStyle = css`
    width: 60%;
`;

const addToCartTextStyle = {
    marginBottom: '0px',
    //testing breakpoint 
    tabletScreenStyle:{
        color:'green',
    },
};

const productStyle = {
    flex: '1 1 188px',
    flexDirctn: 'column',
    bgColor:'#FFF4E8',
    margin:'0 6.5px 140px 6.5px', 
    height: '184px',
    position: 'relative',
    alignItems: 'center',
};

const productImgStyle = {
     padding: '60px',
     position: 'absolute',
     top: '100px',
};

//making te image
// const imgStyle = {
//     maxWidth : '350px',
//     width:'100%',
//     height:'auto',
//     border:'1px solid red'
// };

export function Product({ gatsbyImgNode, productDataNode }) {

    return (
        <Container {...productStyle}>
            <Button {...cartButtonStyle} >
                <H4 {...addToCartTextStyle} >Add To Cart</H4>
                <Container {...basketContStyle}>
                    <img css ={basketImgStyle} src={basketWhiteSvg} alt="" />
                </Container>
            </Button>
            <H4>{productDataNode.name}</H4>
            <Container>
                <H4 css = {css`margin-right: 20px;`} >{productDataNode.currentPrice}</H4>
                <H4 css ={css`text-decoration: line-through; color: #A9A7A6`} >{productDataNode.previousPrice}</H4>
            </Container>            
            <GatsbyImage  css = {productImgStyle} image={getImage(gatsbyImgNode)}  alt = {gatsbyImgNode.relativePath}/>
        </Container>
    );

}

export default Product;