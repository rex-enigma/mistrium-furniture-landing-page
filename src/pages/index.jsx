import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
display:flex;
color:blue;
flex-direction:${props => props.column ? 'column' : false}
`;


function HomePage() {

    return (
        <div css={css`color:blue`}>
            <Container column value={10}>home page</Container>
        </div>
    );
}


console.log(Container);





export default HomePage;