import React from "react";
import { arrowWhiteSvg } from "../assets/svgImages";
import Button from "./button";

const formStyle = {
    display: 'flex',
    padding: '6px',
    margin: '0px 14px 0px 14px',
    backgroundColor: '#F5F5F5',
    borderRadius: '6px',
};

const inpStyle = {
 flex: '1 1',
 //set input minWidth to 0 so that it can shrink below its default width with flex-shrink: 1, {setting 'width: 0px' also works in this case}
 minWidth: '0px',
 backgroundColor: '#F5F5F5',
 outline:'none',
 border:'none',
};
const buttstyle ={
    flex: '0 1 152px',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'var(--main-color)',
    border: 'none',
    borderRadius: '6px',
    height: '46px',
    padding: '0px 0px 0px 0px',
};

const buttInnerTextStyle = {
    margin: '14px',
    color: ' white',
};


const imgStyle = {
    label: 'img',
    backgroundColor: '#FAE2C8',
    width: '40px',
    height: '40px',
    margin: '0px 3px 0px 0px',
    boxSizing: ' border-box',
    objectFit: 'none',
    borderRadius: '6px'
};

function Form() {
    return(
        <form  css = {formStyle}action="">
            <input css={inpStyle} type="text" placeholder="You business email .."/>
                <Button {...buttstyle}>
                    <h4 css ={buttInnerTextStyle}>
                        Get Started
                    </h4>
                    <img css={imgStyle} src={arrowWhiteSvg} alt="send data" />
                </Button>
                
        </form>
    );
}

export default Form;