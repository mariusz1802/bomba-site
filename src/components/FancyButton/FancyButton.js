import React from "react";
import styles from "./FancyButton.module.scss";
function FancyButton() {
  return (
    <button className={styles.button}>
      <span> Jestem zainteresowany</span>
      <div className={styles.button__horizontal}></div>
      <div className={styles.button__vertical}></div>
    </button>
  );
}

export default FancyButton;
