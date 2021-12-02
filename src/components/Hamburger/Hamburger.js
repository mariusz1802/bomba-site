import React from "react";
import { Spin as Hamburger } from "hamburger-react";
import styles from "./Hamburger.module.scss";
function HamburgerButton({ toggled, toggle }) {
  return (
    <div className={styles.mobileIcons}>
      <Hamburger
        toggled={toggled}
        toggle={toggle}
        size="38"
        direction="right"
      />
    </div>
  );
}

export default HamburgerButton;
