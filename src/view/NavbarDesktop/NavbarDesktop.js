import React from "react";
import styles from "./NavbarDesktop.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Sticky from "react-sticky-el";

import Links from "./Links";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
const facebook_url = "https://www.facebook.com/Bombadesignpl-108034361531951";
const instagram_url = "http://www.instagram.com";

const myStyle = {
  zIndex: 10,
};

function NavbarDesktop() {
  return (
    <Sticky stickyStyle={myStyle}>
      <div id="fixed" className={styles.navbar}>
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
            <AiFillInstagram
              className={`${styles.instagram} ${styles.icons}`}
            />
          </a>
        </div>
      </div>
    </Sticky>
  );
}

export default NavbarDesktop;
