import styled from "@emotion/styled";

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.flexDirctn,
  width: props.width,
  height: props.height,
  padding: props.padding,
  margin: props.margin,
  marginTop: props.marginTop,
  marginRight: props.marginRight,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  position: props.position,
  left: props.left,
  right: props.right,
  top: props.top,
  label: props.label,
  backgroundColor: props.bgColor,
}));


export default Container;