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


body{
    margin:10px 0px 10px 9px;

    h1, p{
    margin:0px 14px 0px 0px;
   }
   
   //using url font from google font apis (@import).
   h1{font-family: Montserrat, roboto;}

   p{
      font-family: roboto;
   }

// using the local font after downloading it (@font-face).
//    h1{font-family: geomanist}

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

