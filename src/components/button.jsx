import styled from '@emotion/styled';

const Button = styled.button((props)=>({
    boxSizing:'border-box',
    cursor: 'pointer',
    width:props.width,
    border:props.border,
    height:props.height,
    backgroundColor:props.backgroundColor,
    borderRadius:props.borderRadius,
    color:props.color,
    borderColor:props.borderColor,
    borderWidth:props.borderWidth,
    fontWeight:props.fontWeight,

}));

 export default Button;