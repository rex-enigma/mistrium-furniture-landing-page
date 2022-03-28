import React from "react";
import {css} from '@emotion/react';
import { siteLogoSvg, facebookSvg, instagramSvg, youtubeSvg } from "../assets/svgImages";
import Container from "./container";

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
          <Container flexDirctn = 'column' label ='social-media-links'  margin = {'0px 9px 0px auto'} >
            <p>
                follow us on!
            </p>
            <Container justifyContent='space-between' alignItems = 'center'>
                <img width = {'12px'} height = {'22px'} src={facebookSvg} alt="facebook logo" />
                <img width = {'25px'} height = {'25px'} src={instagramSvg} alt="instagram logo" />
                <img width = {'25px'} height = {'31px'} src={youtubeSvg} alt="youtube logo" />
            </Container>
          </Container>
        </footer>
        );
}

export default Footer;