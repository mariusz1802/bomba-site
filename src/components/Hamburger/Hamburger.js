import React from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const HamburgerContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 130;
  -webkit-tap-highlight-color: transparent;

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

HamburgerButton.propTypes = {
  toggled: PropTypes.string,
  toggle: PropTypes.string,
};

export default HamburgerButton;
