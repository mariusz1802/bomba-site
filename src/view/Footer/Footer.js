import React from "react";
import background from "./footer-background.jpg";
import styles from "./Footer.module.scss";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
const facebook_url = "https://www.facebook.com/Bombadesignpl-108034361531951";
const instagram_url = "http://www.instagram.com";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <img className={styles.image} src={background} alt="Footer background" />
      <a href={facebook_url} target="_blank" rel="noopener noreferrer">
        <AiFillFacebook className={`${styles.facebook} ${styles.icons}`} />
      </a>

      <a href={instagram_url} target="_blank" rel="noopener noreferrer">
        <AiFillInstagram className={`${styles.instagram} ${styles.icons}`} />
      </a>
      <p className={styles.created}>created by bombadesign.pl</p>
    </div>
  );
}

export default Footer;
