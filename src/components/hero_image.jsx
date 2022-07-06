import React from "react";
import Container from "./container";
import { StaticImage } from "gatsby-plugin-image";


const heroImageWrapperStyle = {
    marginTop: '30px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    label: 'heroImageWrapperStyle',

};


function HeroImage() {
    return (
        <Container {...heroImageWrapperStyle}>
            <StaticImage src='../assets/images/hero-image.png' width={323} height={210} alt='header image' />
        </Container>
    );
}

export default HeroImage;