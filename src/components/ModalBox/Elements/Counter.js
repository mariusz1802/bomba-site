import React from "react";
import styles from "./Counter.module.scss";

function Counter({ price }) {
  return <div className={styles.price}> {price}zł</div>;
}

export default Counter;
