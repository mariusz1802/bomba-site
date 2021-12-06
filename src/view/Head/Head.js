import React from "react";
import styles from "./Head.module.scss";
import Flag from "../Navbar/Flag/Flag";
import BombaLogo from "../../components/BombaLogo/BombaLogo";
function Head() {
  return (
    <div id="home" className={styles.container}>
      <BombaLogo />
      <div className={styles.flag}>
        <Flag />
      </div>
    </div>
  );
}

export default Head;
