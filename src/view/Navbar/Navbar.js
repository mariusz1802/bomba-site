import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Navbar.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import logo from "./logo_small.png";

import { useTranslation } from "react-i18next";
import Flag from "./Flag/Flag";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { t } = useTranslation();


  return (
    <>
      <div className={styles.navbar} onClick={handleClick}>
        {click ? (
          <FaTimes className={styles.menu} />
        ) : (
          <GiHamburgerMenu className={`${styles.menu} ${styles.burger}`} />
        )}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <img src={logo} alt="logo" className={styles.logoMenu} />
          <Router>
       
            <Link smooth to="#home" onClick={handleClick} className="nav-links">
              {t("Menu.1")}
            </Link>
            <Link smooth to="#onas" onClick={handleClick} className="nav-links">
              {t("Menu.2")}
            </Link>
            <Link
              smooth
              to="#oferta"
              onClick={handleClick}
              className="nav-links"
            >
              {t("Menu.3")}
            </Link>
            <Link
              smooth
              to="#partnerzy"
              onClick={handleClick}
              className="nav-links"
            >
              {t("Menu.4")}
            </Link>
            <Link
              smooth
              to="#kontakt"
              onClick={handleClick}
              className="nav-links"
            >
              {t("Menu.5")}
            </Link>
            <Flag />
          </Router>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
