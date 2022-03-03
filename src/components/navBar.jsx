import React from 'react';
// import { drawerSvg, siteLogoSvg, searchSvg, baskeSvg, userSvg } from '../assets/svgImages';
import styled from '@emotion/styled';
// import drawerSvg from '../images/';
const Container = styled.div(props => ({
  display: 'flex',

}));

function NavBar() {
  return (
    <nav>
      <Container>
        <img src={'../images/drawer-icon.svg'} alt="drawer-icon" />
        {/* <img src={siteLogoSvg} alt="mistrium" /> */}
      </Container>
      <Container></Container>
    </nav>
  );
}




export default NavBar;