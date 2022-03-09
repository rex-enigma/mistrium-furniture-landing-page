import styled from "@emotion/styled";

 const Container = styled.div(props => ({
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
  

  export default Container;