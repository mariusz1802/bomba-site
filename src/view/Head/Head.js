import React from "react";
import styles from "./Head.module.scss";
import logoSmall from "./logo_small.jpg";
import Flag from "../Navbar/Flag/Flag";
function Head() {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.flag}><Flag/></div>
      <img src={logoSmall} alt="logo" className={styles.responsive}></img>
    </div>
  );
}

export default Head;
