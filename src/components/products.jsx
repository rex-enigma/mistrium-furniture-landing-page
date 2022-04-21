import React from 'react';
import Container from './container';
import H4 from './h4_heading';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/react';
import { arrowSvg } from '../assets/svgImages'
import { productData } from '../data';
import Button from './button';
import { getFilteredImages } from './getImages';

const optionStyle = styleProps => ({
    justifyContent: 'space-between',
    width: styleProps.width,

});

const arrowStyle = css`
    position: absolute;
    left: 50px;
`;

const productCartStyle = propsStyle => (
    {
        color: propsStyle.color || '#A9A7A6',
        fontWeight: '400',
        fontSize: '14px',
    }
);

const productCartHeader = propsStyle => (
    {
        color: propsStyle.color || '#A9A7A6',
        fontWeight: '500',
        fontSize: '16px',
    }
);

function Products() {

}


function ProductOptions() {
    return (
        <Container flexDirctn='column' alignItems='center'>
            <Container {...optionStyle({ width: '80%' })} >
                <H4 {...productCartHeader({})} >Best Selling</H4>
                <H4 {...productCartHeader({})}>Most Popular</H4>
                <Container position='relative'>
                    <H4 {...productCartHeader({ color: '#3D3D3F' })} >See All</H4>
                    <img css={arrowStyle} src={arrowSvg} width='24px' height='14px'></img>
                    <Container marginLeft='15px' width='25px' height='15px' bgColor='#E9E9E9' />
                </Container>
            </Container>
            <Container {...optionStyle({ width: '60%' })} >
                <H4 {...productCartStyle({})} >All</H4>
                <H4 {...productCartStyle({})} >Bed</H4>
                <H4 {...productCartStyle({})} >Sofa</H4>
                <H4 {...productCartStyle({ color: '#3D3D3F' })} >Chair</H4>
                <H4 {...productCartStyle({})} >Light</H4>
            </Container>
        </Container>
    );
}


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


export function Product() {
    let listItems = getFilteredImages('product', useImages).map((gatsbyImage, index) => {
        return (
            <Container flexDirctn='column' bgColor='#FFF4E8'>
                <Button>
                    <H4>Add To Cart</H4>
                    <Container>
                        <img src="" alt="" />
                    </Container>
                </Button>
                <H4>{productData[index].name}</H4>
                <Container>
                    <H4>{productData[index].currentPrice}</H4>
                    <H4>{productData[index].previousPrice}</H4>
                </Container>
                {gatsbyImage}
            </Container>
        );
    });

    return listItems;
}


export default Products;
