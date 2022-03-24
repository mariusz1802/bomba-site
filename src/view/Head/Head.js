import React from "react";
import styles from "./Head.module.scss";
import Flag from "../Navbar/Flag/Flag";
import BombaLogo from "../../components/BombaLogo/BombaLogo";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
import styled from "styled-components";

const BombaWrapper = styled.div`
    padding-top : 100px;
`
function Head({ theme, toggleTheme }) {
  return (
    <>
    <div id="home" className={styles.container}>
      <BombaWrapper>
        <BombaLogo />
      </BombaWrapper>
      <ToggleButton on theme={theme} toggleTheme={toggleTheme} />
      <div className={styles.flag}>
        <Flag />
      </div>
    </div>
    </>
  );
}

export default Head;
