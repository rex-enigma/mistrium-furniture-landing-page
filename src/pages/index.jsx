import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import {headerData} from '../data';


const heroImage = css`
//margin left auto doesnt work with StaticImage.
//margin-left: auto;



`;

const headTitleStyle = css`
margin-bottom: 15px;
`;

const heroiImageWrapperStyle = css`
 margin-top: 9px;
 display: flex;
 justify-content: flex-end;
`;


function HomePage() {

    return (
        <Layout>
            <main>
                <div css={heroiImageWrapperStyle}>
                   <StaticImage css = {heroImage}  src ='../assets/images/hero-image.jpg' width={323} height={210} alt='header image'/> 
                </div>
             <header>
                 <h1 css= {headTitleStyle}>
                   {headerData.title}
                 </h1>
                 <p>
                     {headerData.subtitle}
                 </p>
             </header>
            </main>
        </Layout>
    );
}






export default HomePage;