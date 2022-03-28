import React from 'react';
import { drawerSvg, siteLogoSvg, searchSvg, basketSvg, userSvg } from '../assets/svgImages';
import {css} from '@emotion/react';
import Container from './container'


const navStyles = css`
 display: flex;
 position: fixed;
 width: 100%;
 z-index: 9999;
top: 20px;

`;


function NavBar() {
  return (
    <nav css = {navStyles}>
      <Container width = {'175px'} alignItems ='center' justifyContent='space-between' >
       <img  height={'20px'} src={drawerSvg} alt="left drawer icon"/>
       <img src={siteLogoSvg} alt="mistrium logo" />    
      </Container>
      <Container width={'140px'} justifyContent='space-around' margin = {'0px 9px 0px auto'} >
        <img src={searchSvg} alt="search icon" />
        <img src={basketSvg} alt="cart icon" />
        <img src={userSvg} alt="user icon" />
      </Container>
    </nav>
  );
}


export default NavBar;