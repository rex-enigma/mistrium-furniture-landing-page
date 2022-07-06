import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const imgContStyleExternal = {
    display:'flex',
    justifyContent: 'flex-end',
     marginTop: '-60px',
     marginBottom: '-40px',
};

function HeroImage() {
    return (
        <StaticImage css={imgContStyleExternal} src ='../assets/images/hero-image.png' />
    );
}

export default HeroImage;