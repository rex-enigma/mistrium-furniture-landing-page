import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const Container = styled.div`
display:flex;
color:blue;
flex-direction:${props => props.column ? 'column' : false}
`;

const heroImage = css`
left: 42px;
width:323px;
height: 176px;
`;


function HomePage() {

    return (
        <Layout>
            <main css={css`display: flex;justify-content: center;`}>
             <StaticImage css = {heroImage}  src ='../assets/images/hero-image.jpg'  />
            </main>
        </Layout>
    );
}






export default HomePage;