import React from 'react';
import { drawerSvg, siteLogoSvg, searchSvg, basketSvg, userSvg } from '../assets/svgImages';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

//footer has a similar structure(should only be used by footer);
export const Container = styled.div(props => ({
  display: 'flex',
  flexDirection:props.flexDirctn,
  width: props.width,
  height:props.height,
  padding:props.padding,
  margin:props.margin,
  justifyContent:props.justifyContent,
  alignItems:props.alignItems,
  position:props.position,
  left:props.left,
  right:props.right,
  top:props.top,
  label:props.label,    
}));

const navStyles = css`
 display: flex;
 margin-bottom: 20px;
`;

function NavBar() {
  return (
    <nav css = {navStyles}>
      <Container width = {'175px'} alignItems ='center' justifyContent='space-between' >
       <img  height={'20px'} src={drawerSvg} alt="left drawer icon"  ></img>
       <img src={siteLogoSvg} alt="mistrium logo" />    
      </Container>
      <Container leftAuto width={'140px'} justifyContent='space-around' margin = {'0px 9px 0px auto'} >
        <img src={searchSvg} alt="search icon" />
        <img src={basketSvg} alt="cart icon" />
        <img src={userSvg} alt="user icon" />
      </Container>
    </nav>
  );
}


export default NavBar;