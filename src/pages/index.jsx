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


function HomePage() {

    return (
        // <Layout>
        //     <main></main>
        // </Layout>
        <div>
            hellow
            <StaticImage src='../images/drawer-icon.svg'></StaticImage>
        </div>

    );
}


console.log(Container);





export default HomePage;