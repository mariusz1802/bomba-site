import React from "react";
import styles from "./SwitchButton.module.scss";

function SwitchButton({ checked }) {
  return (
    <div className={styles.switchContainer}>
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} className={styles.checkbox} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <button>Toggle theme</button>
    </div>
  );
}

export default SwitchButton;
