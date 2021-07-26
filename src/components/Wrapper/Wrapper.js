import React from "react";
import styles from "./Wrapper.module.scss";

function Wrapper({ children, ...props }) {
  return <div className={styles.container}>{children}</div>;
}

export default Wrapper;
