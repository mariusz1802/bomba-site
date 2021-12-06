import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Spin as Hamburger } from "hamburger-react";
import styled from "styled-components";
import logo from "./logo_small.png";

import HamburgerButton from "../../components/Hamburger/Hamburger";

import { useTranslation } from "react-i18next";
import Flag from "./Flag/Flag";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { t } = useTranslation();

  const Wrapper = styled.div`
color: red;
height: 100%;
width: 100%;
padding-top: 100px;
background-color : ${({ theme }) => theme.body};
  }
  `;

  return (
    <>
      <div onClick={handleClick}>
        <HamburgerButton toggled={click} toggle={handleClick} />
      </div>
      <ul
        className={
          click ? `${styles.navMenu} ${styles.active}` : styles.navMenu
        }
      >
        <Wrapper>
          <img src={logo} alt="logo" className={styles.logoMenu} />
          <Router>
            <li>
              <Link
                smooth
                to="#home"
                onClick={handleClick}
                className={styles.navLinks}
              >
                {t("Menu.1")}
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#onas"
                onClick={handleClick}
                className={styles.navLinks}
              >
                {t("Menu.2")}
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#oferta"
                onClick={handleClick}
                className={styles.navLinks}
              >
                {t("Menu.3")}
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#partnerzy"
                onClick={handleClick}
                className={styles.navLinks}
              >
                {t("Menu.4")}
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="#kontakt"
                onClick={handleClick}
                className={styles.navLinks}
              >
                {t("Menu.5")}
              </Link>
            </li>
            <Flag />
          </Router>
        </Wrapper>
      </ul>
    </>
  );
}

export default Navbar;
