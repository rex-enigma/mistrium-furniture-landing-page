import React from 'react';
import Container from './container';
import H4 from './h4_heading';
import Button from './button';
import {basketSvg} from '../assets/svgImages';
import { css } from '@emotion/react';


const cartButtonStyle = {
    alignItems: 'center',
    backgroundColor: '#D9AB82',
    border: 'none',
    color: 'white',
    maxWidth: '137px',
    // margin: 'auto',
    borderRadius: '20px',
    padding: '11px 12px',
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

const imgStyle =css`
    width: 70%;
`;

const addToCartTextStyle = {
    marginBottom: '0px',
    //testing breakpoint 
    tabletScreenStyle:{
        color:'green',
    },
};

const productStyle = {
    flexBasis: '188px',
    flexDirctn: 'column',
    bgColor:'#FFF4E8',
    margin:'0 4.5px 140px 4.5px', 
};

export function Product({ imageComponent, productDataNode }) {
    return (
        <Container {...productStyle}>
            <Button {...cartButtonStyle} >
                <H4 {...addToCartTextStyle} >Add To Cart</H4>
                <Container {...basketContStyle}>
                    <img css ={imgStyle} src={basketSvg} alt="" />
                </Container>
            </Button>
            <H4>{productDataNode.name}</H4>
            <Container>
                <H4>{productDataNode.currentPrice}</H4>
                <H4>{productDataNode.previousPrice}</H4>
            </Container>
            {imageComponent}
        </Container>
    );

}

export default Product;