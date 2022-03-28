import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import {headerData} from '../data';
import Button from '../components/button';
import Container from '../components/container';
import ClientList from '../components/clients';



const headerButtonSharedStyle = {
    width:'144px',
    height:'45px',
    fontWeight:'bold',
};

const heroImageWrapperStyle = css`
 margin-top:30px;
 position: relative;
 right: -9px;
 display: flex;
 justify-content: flex-end;

`;


const styleCenter = css`
 display: flex;
 justify-content: center;
`;

function HomePage() {

    return (
        <Layout>
            <main>
                <div css={heroImageWrapperStyle}>
                   <StaticImage src ='../assets/images/hero-image.jpg' width={323} height={210} alt='header image'/> 
                </div>
             <header>
                 <h1>
                    {headerData.title}
                 </h1>
                 <p>
                    {headerData.subtitle}
                 </p>
             </header>
             <Container label='headerButtons' justifyContent = 'space-around' marginBottom = '48px'>
                <Button {...headerButtonSharedStyle} borderWidth ='0px' color = 'white' backgroundColor ='var(--main-color)' >Request a Quote</Button>
                <Button {...headerButtonSharedStyle} border = '1px solid var(--main-color)' color = 'var(--main-color)' backgroundColor ='white' border-color = 'var(--main-color)'>Watch Video</Button>
             </Container>
             <h4 css = {styleCenter}>
                 SOME OF OUR TRUSTED CLIENTS
             </h4>
             <ClientList/>
            </main>
        </Layout>
    );
}






export default HomePage;