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

:root {
--main-color: #C4A586;
}


body{
    margin:10px 9px;

    h1, h2, h3, h4, h5, h6, p, ul{
    margin:0px 0px 15px 0px;
   }

  

   
   //option 1
   //using url font from google font apis (@import).
   h1, button{font-family: Montserrat, roboto;}

   //option 2
   // using the local font after downloading it (@font-face).
   //    h1{font-family: geomanist}


   p, h2, h3, h4, h5, h6{
      font-family: roboto;
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

