import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { headerData } from '../data';
import Button from '../components/button';
import Container from '../components/container';
import ClientList from '../components/clients';
import H4 from '../components/h4_heading';



const headerButtonSharedStyle = {
    width: '144px',
    height: '45px',
    fontWeight: 'bold',
};

const heroImageWrapperStyle = {
 marginTop: '30px',
 position: 'relative',
 right: '-9px',
 display: 'flex',
 justifyContent: 'flex-end',
 label: 'heroImageWrapperStyle',

};


const styleCenter = css`
 display: flex;
 justify-content: center;
`;

function HomePage() {

    return (
        <Layout>
            <main>
                <Container {...heroImageWrapperStyle}>
                    <StaticImage src='../assets/images/hero-image.jpg' width={323} height={210} alt='header image' />
                </Container>
                <header>
                    <h1>
                        {headerData.title}
                    </h1>
                    <p>
                        {headerData.subtitle}
                    </p>
                </header>
                <Container label='headerButtons' justifyContent='space-around' marginBottom='48px'>
                    <Button {...headerButtonSharedStyle} borderWidth='0px' color='white' backgroundColor='var(--main-color)' >Request a Quote</Button>
                    <Button {...headerButtonSharedStyle} border='1px solid var(--main-color)' color='var(--main-color)' backgroundColor='white' border-color='var(--main-color)'>Watch Video</Button>
                </Container>
                <H4>SOME OF OUR TRUSTED CLIENTS</H4>
                <ClientList />
                <H4>FEATURED PRODUCT</H4>
            </main>
        </Layout>
    );
}




export default HomePage;