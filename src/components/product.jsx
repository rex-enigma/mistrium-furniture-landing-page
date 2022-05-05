import React from 'react';
import Container from './container';
import H4 from './h4_heading';
import Button from './button';



export function Product({ imageComponent, productDataNode }) {
    return (
        <Container flexDirctn='column' bgColor='#FFF4E8'>
            <Button>
                <H4>Add To Cart</H4>
                <Container>
                    <img src="" alt="" />
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