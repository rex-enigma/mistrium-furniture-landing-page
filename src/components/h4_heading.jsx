import styled from "@emotion/styled";


const H4 = styled.h4(props =>({
    display: 'flex',
    justifyContent: 'center',
    fontWeight:props.fontWeight,
    fontSize:props.fontSize,
}));

export default H4;