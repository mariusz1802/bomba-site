import React, { Suspense } from "react";
import styles from "./Head.module.scss";
import Flag from "../Navbar/Flag/Flag";
import LoadingScreen from "react-loading-screen";
import Logo from "../../components/BombaLogo/bomba_small.png";

import BombaLogo from "../../components/BombaLogo/BombaLogo";
import ToggleButton from "../../components/ToggleButton/ToggleButton";
function Head({ theme, toggleTheme }) {
  return (
    <div id="home" className={styles.container}>
      <Suspense
        fallback={
          <LoadingScreen
            loading={true}
            bgColor="#f1f1f1"
            spinnerColor="#9ee5f8"
            textColor="#676767"
            logoSrc={Logo}
            children="bombadesign.pl"
          />
        }
      >
        <BombaLogo />
      </Suspense>
      <ToggleButton theme={theme} toggleTheme={toggleTheme} />
      <div className={styles.flag}>
        <Flag />
      </div>
    </div>
  );
}

export default Head;
