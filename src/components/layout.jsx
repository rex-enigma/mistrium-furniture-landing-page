import React from "react";
import NavBar from "./navBar";
import Footer from './footer';
import {css, Global} from '@emotion/react';

const AppGlobalStyle =  css`
body{
    margin:20px 0px 20px 9px;
    p{margin:0px;}
}
`;


function Layout(props) {

    return (
        <div>
            <Global styles ={AppGlobalStyle}/>
            <NavBar />
            {props.children}
            <Footer/>
        </div>
    );
}



export default Layout;