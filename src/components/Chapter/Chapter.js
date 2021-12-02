import React from "react";
import styles from "./Chapter.module.scss";
import Hyphenated from "react-hyphen";
import AOS from "aos";
import "aos/dist/aos.css";
import pl from 'hyphenated-pl';



function Chapter({ title, description,subtitle}) {
    AOS.init();
 
  return (
           <>
      <h1 className={styles.title}>{title} </h1>
      <div className={styles.underline}></div>
      <p className={`${styles.subtitle} ${styles.description}`}>{subtitle} </p>
      <Hyphenated language={pl}>
        <p className={styles.description}>{description}</p>
      </Hyphenated>
</>
  );
}

export default Chapter;
