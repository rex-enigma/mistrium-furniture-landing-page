import React from "react";
import NavBar from "./navBar";
import Footer from './footer';
import {css} from '@emotion/react';

const AppBackground =  css`
background-color: #FBFBFB;
`;


function Layout(props) {

    return (
        <div css = {AppBackground}>
            <NavBar />
            {props.children}
            <Footer/>
        </div>
    );
}



export default Layout;