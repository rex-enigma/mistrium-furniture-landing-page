import styled from "@emotion/styled";


const H4 = styled.h4(props => ({
    display: 'flex',
    justifyContent: 'center',
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    color: props.color,
    marginBottom:props.marginBottom,
    '@media (max-width: 312px)':props.tabletScreenStyle,
}));

export default H4;