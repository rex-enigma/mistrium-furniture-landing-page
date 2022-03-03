import React from 'react';
import { drawerSvg, siteLogoSvg, searchSvg, basketSvg, userSvg } from '../assets/svgImages';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

//footer has a similar structure(should only be used by footer);
export const Container = styled.div(props => ({
  display: 'flex',
  flexDirection:props.flexDirctn,
  width: props.width,
  marginLeft: props.leftAuto && 'auto',
  justifyContent:'space-around',
  alignItems:props.alignItems,
  position:props.pRelative && 'relative',
  left:props.left,
  right:props.right,
  label:props.label,
}));

const navStyles = css`
 display: flex;
 padding: 5px;
`;

function NavBar() {
  return (
    <nav css = {navStyles}>
      <Container width={'200px'} pRelative left = {'-15px'}>
       <img src={drawerSvg} alt="left drawer icon"  ></img>
       <img src={siteLogoSvg} alt="mistrium logo" />    
      </Container>
      <Container leftAuto width = {'150px'} >
        <img src={searchSvg} alt="search icon" />
        <img src={basketSvg} alt="cart icon" />
        <img src={userSvg} alt="user icon" />
      </Container>
    </nav>
  );
}


export default NavBar;