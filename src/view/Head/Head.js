import React from "react";
import styles from "./Head.module.scss";
import Flag from "../Navbar/Flag/Flag";

import BombaLogo from "../../components/BombaLogo/BombaLogo";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
function Head({ theme, toggleTheme }) {
  return (
    <div id="home" className={styles.container}>
        <BombaLogo />
      <ToggleButton theme={theme} toggleTheme={toggleTheme} />
      <div className={styles.flag}>
        <Flag />
      </div>
    </div>
  );
}

export default Head;
