import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import {headerData} from '../data';


const heroImage = css`
left: 82px;
width:323px;
height: 176px;
`;

const font = css`
 font-family: 'Montserrat';
 font-weight: 'bold';
`;


function HomePage() {

    return (
        <Layout>
            <main>
             <StaticImage css = {heroImage}  src ='../assets/images/hero-image.jpg' alt='header image'/>
             <header>
                 <h1 css= {font}>
                   {headerData.title}
                 </h1>
             </header>
            </main>
        </Layout>
    );
}






export default HomePage;