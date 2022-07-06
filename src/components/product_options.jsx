import React from 'react';
import Container from './container';
import H4 from './h4_heading';
import { css } from '@emotion/react';
import { arrowBlackSvg } from '../assets/svgImages'


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

const productOptionsStyle = {
    flexDirctn: 'column',
    alignItems: 'center',
    marginBottom: '42px',
};

function ProductOptions() {
    return (
        <Container {...productOptionsStyle}>
            <Container {...optionStyle({ width: '80%' })} >
                <H4 {...productCartHeader({})} >Best Selling</H4>
                <H4 {...productCartHeader({})}>Most Popular</H4>
                <Container position='relative'>
                    <H4 {...productCartHeader({ color: '#3D3D3F' })} >See All</H4>
                    <img css={arrowStyle} src={arrowBlackSvg} width='24px' height='14px' alt='' />
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


export default ProductOptions;