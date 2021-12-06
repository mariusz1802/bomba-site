import React from "react";
import { Spin as Hamburger } from "hamburger-react";
import styled from "styled-components";

const HamburgerContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 130;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;
function HamburgerButton({ toggled, toggle }) {
  return (
    <HamburgerContainer>
      <Hamburger
        toggled={toggled}
        toggle={toggle}
        size="38"
        direction="right"
      />
    </HamburgerContainer>
  );
}

export default HamburgerButton;
