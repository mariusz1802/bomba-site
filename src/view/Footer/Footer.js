import React from "react";
import styles from "./Footer.module.scss";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
const facebook_url = "https://www.facebook.com/Bombadesignpl-108034361531951";
const instagram_url = "https://www.instagram.com/bombadesign.pl/";
//images
import background from "./footer-background.jpg";
import backgroundDark from "./footer-background-dark.jpg";
import backgroundAvif from "./footer-background.avif";
import backgroundDarkAvif from "./footer-background-dark.avif";

function Footer({ theme }) {
  return (
    <div className={styles.footerContainer}>
      {theme === "light" ? (
        <picture>
          <source type="image/avif" srcSet={backgroundAvif} />
          <img
            className={styles.image}
            src={background}
            alt="Footer background"
          />
        </picture>
      ) : (
        <picture>
          <source type="image/avif" srcSet={backgroundDarkAvif} />
          <img
            className={styles.image}
            src={backgroundDark}
            alt="Footer background"
          />
        </picture>
      )}
      <a href={facebook_url} target="_blank" rel="noopener noreferrer">
        <AiFillFacebook className={`${styles.facebook} ${styles.icons}`} />
      </a>

      <button></button>

      <a href={instagram_url} target="_blank" rel="noopener noreferrer">
        <AiFillInstagram className={`${styles.instagram} ${styles.icons}`} />
      </a>
      <p className={styles.created}>created by bombadesign.pl</p>
    </div>
  );
}

export default Footer;
