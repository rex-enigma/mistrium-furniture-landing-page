import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import useHeaderData from '../custom_hooks/use_header_data';
import Button from '../components/button';
import Container from '../components/container';
import ClientList from '../components/clients';
import H4 from '../components/h4_heading';
import FeaturedPrds from '../components/featured_products';
import Products from '../components/products';
import ProductOptions from '../components/product_options';


const headerButtonSharedStyle = {
    width: '144px',
    height: '45px',
    fontWeight: 'bold',
};

const heroImageWrapperStyle = {
    marginTop: '30px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    label: 'heroImageWrapperStyle',

};

const LR9px = css`
margin: 0px var(--margin-L-R);
`;

function HomePage() {
    return (
        <Layout>
            <main css={css`margin-top: 60px;`}>
                <Container {...heroImageWrapperStyle}>
                    <StaticImage src='../assets/images/hero-image.png' width={323} height={210} alt='header image' />
                </Container>
                <header css={LR9px}>
                    <h1>
                        {useHeaderData().title}
                    </h1>
                    <p>
                        {useHeaderData().subtitle}
                    </p>
                </header>
                <Container label='headerButtons' justifyContent='space-around' marginBottom='48px'>
                    <Button {...headerButtonSharedStyle} borderWidth='0px' color='white' backgroundColor='var(--main-color)' >Request a Quote</Button>
                    <Button {...headerButtonSharedStyle} border='1px solid var(--main-color)' color='var(--main-color)' backgroundColor='white' border-color='var(--main-color)'>Watch Video</Button>
                </Container>
                <H4>SOME OF OUR TRUSTED CLIENTS</H4>
                <ClientList />
                <H4>FEATURED PRODUCTS</H4>
                <FeaturedPrds />
                <H4>PRODUCTS</H4>
                <ProductOptions />
                <Products />
            </main>
        </Layout>
    );
}




export default HomePage;