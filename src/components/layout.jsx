import React from "react";
import NavBar from "./navBar";
import Footer from './footer';
import {css, Global} from '@emotion/react';
import geomanistRegular from '../assets/fonts/geomanist-regular-webfont.ttf';


const globalStyle =  css`
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat:wght@700&display=swap');
@font-face{
    font-family: 'geomanistregular';
    src: url(${geomanistRegular}) format('truetype');
};

html{
    margin:10px 0px 20px 9px;
    h1, p{margin:0px;}
}
`;


function Layout(props) {

    return (
        <div>
            <Global styles ={globalStyle}/>
            <NavBar />
            {props.children}
            <Footer/>
        </div>
    );
}



export default Layout;

