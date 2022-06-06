import styled from '@emotion/styled';

const Button = styled.button((props)=>({
    display: 'flex',
    flexDirection: props.flexDirctn,
    flexFlow: props.flexFlow,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    boxSizing:'border-box',
    cursor: 'pointer',
    width:props.width,
    maxWidth: props.maxWidth,
    border:props.border,
    height:props.height,
    backgroundColor:props.backgroundColor,
    borderRadius:props.borderRadius,
    color:props.color,
    borderColor:props.borderColor,
    borderWidth:props.borderWidth,
    fontWeight:props.fontWeight,
    margin: props.margin,
    padding: props.padding,

}));

 export default Button;