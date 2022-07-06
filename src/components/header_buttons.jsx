import React from "react";
import Button from "./button";



const headerButtonSharedStyle = {
    width: '144px',
    height: '45px',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center', 
};

function HeaderButtons() {
    return(
        <>
            <Button {...headerButtonSharedStyle} borderWidth='0px' color='white' backgroundColor='var(--main-color)' >Request a Quote</Button>
            <Button {...headerButtonSharedStyle} border='1px solid var(--main-color)' color='var(--main-color)' backgroundColor='white' border-color='var(--main-color)'>Watch Video</Button>
        </>
    );

}

export default HeaderButtons;

// <></>  <-that is called a fragment