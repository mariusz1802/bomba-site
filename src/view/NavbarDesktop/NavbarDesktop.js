import React from "react";
import styles from "./NavbarDesktop.module.scss";
import { BrowserRouter as Router } from "react-router-dom";

import Links from "./Links";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
const facebook_url = "https://www.facebook.com/Bombadesignpl-108034361531951";
const instagram_url = "https://www.instagram.com/bombadesign.pl/";

function NavbarDesktop() {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttonContainer}>
        <Router>
          <Links />
        </Router>
      </div>
      <div className={styles.iconContainer}>
        <a href={facebook_url} target="_blank" rel="noopener noreferrer">
          <AiFillFacebook className={`${styles.facebook} ${styles.icons}`} />
        </a>
        <a href={instagram_url} target="_blank" rel="noopener noreferrer">
          <AiFillInstagram className={`${styles.instagram} ${styles.icons}`} />
        </a>
      </div>
    </div>
  );
}

export default NavbarDesktop;
