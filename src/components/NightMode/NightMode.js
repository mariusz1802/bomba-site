import React from "react";
import styles from "./NightMode.module.scss";
import SwitchButton from "../SwitchButton/SwitchButton";
function NightMode({ night, day, children, checked }) {
  return (
    <div className={styles.container}>
      {children}
      <SwitchButton checked={checked} />
    </div>
  );
}

export default NightMode;
