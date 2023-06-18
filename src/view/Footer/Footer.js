import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

import background from "../../assets/images/footerImg/footer-background.jpg";
import backgroundAvif from "../../assets/images/footerImg/footer-background.avif";
import backgroundDark from "../../assets/images/footerImg/footer-background-dark.jpg";
import backgroundDarkAvif from "../../assets/images/footerImg/footer-background-dark.avif";

const facebook_url = "https://www.facebook.com/Bombadesignpl-108034361531951";
const instagram_url = "https://www.instagram.com/bombadesign.pl/";

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

Footer.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Footer;
