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
import  Comments  from '../components/comments';
import HeaderButtons from '../components/header_buttons';
import HeroImage from '../components/hero_image';
import Form from '../components/form';


const interiorButtStyle = {
    border: '1.08px solid #FE8432',
    borderRadius: '19.5px',
    height: '44px',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FE8432',
    backgroundColor: 'var(--app-bg-color)',
    margin: '0px 0px 27px 12px',
    padding:'0px 25px 0px 25px',

};

const LR9px = css`
    margin: 0px var(--margin-L-R);
`;

const sharedColumnStyle = {
    flexDirctn: 'column',
};

function HomePage() {
    return (
        <Layout>
            <main css={css`margin-top: 60px;`}>
               <HeroImage/>
                <header css={LR9px}>
                    <h1>
                        {useHeaderData().title}
                    </h1>
                    <p>
                        {useHeaderData().subtitle}
                    </p>
                </header>
                <Container label='headerButtons' justifyContent='space-around' marginBottom='48px'>
                    <HeaderButtons/>
                </Container>
                <Container {...sharedColumnStyle} label = 'our clients'>
                    <H4>SOME OF OUR TRUSTED CLIENTS</H4>
                    <ClientList />
                </Container>
                <Container {...sharedColumnStyle} label = 'featured products'>
                    <H4>FEATURED PRODUCTS</H4>
                    <FeaturedPrds />
                </Container>
                <Container {...sharedColumnStyle} label = 'products'>
                    <H4>PRODUCTS</H4>
                    <ProductOptions />
                    <Products />
                </Container>
                <H4 css ={css`margin-top: 20px;font-size: 18px `} >Let's see what our customers say </H4>
               <Comments />
               <Button {...interiorButtStyle} >Mistrium Interior</Button>
               <h2 css ={css`margin-left:12px; font-size: 30px;`}>Signup to receive updates about new products</h2>
               <Form/>
            </main>
        </Layout>
    );
}



export default HomePage;