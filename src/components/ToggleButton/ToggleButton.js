import React from "react";
import { func } from "prop-types";
import styled from "styled-components";
import moonIcon from "./moon.svg";
import sunIcon from "./sun.svg";
import { lightTheme } from "../NightMode/theme";

const ToggleContainer = styled.button`
  display: flex;
  background: ${({ theme }) => theme.iconGradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  width: 6rem;
  height: 2.6rem;
  z-index: 100;
  outline: 0 !important;
  margin: 40px 0 70px 0;

  img {
    height: auto;
    width: 2.2rem;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ theme }) =>
        theme === lightTheme ? "translateY(0)" : "translateY(70px)"};
    }

    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme === lightTheme ? "translateY(-70px)" : "translateY(0)"};
    }
  }
  @media screen and (max-width: 1000px) {
    position: relative;

  
  }
`;

function ToggleButton({ toggleTheme }) {
  return (
    <ToggleContainer onClick={toggleTheme}>
      <img src={sunIcon} alt="sun_Icon" />
      <img src={moonIcon} alt="moon_Icon" />
    </ToggleContainer>
  );
}

ToggleButton.propTypes = {
  toggleTheme: func.isRequired,
};

export default ToggleButton;
