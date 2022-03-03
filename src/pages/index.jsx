import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Layout from '../components/layout';

const Container = styled.div`
display:flex;
color:blue;
flex-direction:${props => props.column ? 'column' : false}
`;


function HomePage() {

    return (
        <Layout>
            <main css={css`display: flex;justify-content: center;`}>
                main content
            </main>
        </Layout>
    );
}






export default HomePage;