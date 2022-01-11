import React from "react";
import styles from "./Counter.module.scss";

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function Counter({ price }) {
  return <div className={styles.price}> { numberWithSpaces(price)}zł</div>;
}

export default Counter;
