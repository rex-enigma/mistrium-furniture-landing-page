import React from "react";
import styled from "@emotion/styled";
import {css} from '@emotion/react';
import { siteLogoSvg, facebookSvg, instagramSvg, youtubeSvg } from "../assets/svgImages";
import { Container } from "./navBar";


const Img = styled.img(props=>({
    width:props.width,
    height:props.height,
}));

const footerStyles = css`
display: flex;
align-items: center;
`;

function Footer() {
    return(
        <footer css = {footerStyles}> 
          <Container  position = {'relative'} top={'10px'} >
           <img width = {'125px'} height = {'29px'} src={siteLogoSvg} alt="mistrium logo" />
          </Container >
          <Container leftAuto flexDirctn = 'column' label ='social-media-links'  margin = {'0px 9px 0px auto'} >
            <p>
                follow us on!
            </p>
            <Container alignItems = 'center'>
                <Img width = {'12px'} height = {'22px'} src={facebookSvg} alt="facebook logo" />
                <Img width = {'25px'} height = {'25px'} src={instagramSvg} alt="instagram logo" />
                <Img width = {'25px'} height = {'31px'} src={youtubeSvg} alt="youtube logo" />
            </Container>
          </Container>
        </footer>
        );
}

export default Footer;