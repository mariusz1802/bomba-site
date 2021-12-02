import React from "react";
import styles from "./NavbarDesktop.module.scss";
import { NavHashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import Scrollspy from "react-scrollspy";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Links() {
  // funkcja zmieniająca wybrany język
  const { t } = useTranslation();
  //funckja cofająca przejscie zejscie strony o wysokośc menu
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    console.log(window.innerHeight);
  };

  var Scroll = require("react-scroll");
  var scroll = Scroll.animateScroll;

  function ScrollToTop() {
    scroll.scrollToTop();
  }
  function ScrollToAbout() {
    scroll.scrollTo(700);
  }
  function ScrollToOffer() {
    scroll.scrollTo(1170);
  }
  function ScrollToPartners() {
    scroll.scrollTo(2150);
  }
  function ScrollToContact() {
    scroll.scrollTo(2570);
  }

  return (
    <>
      <NavHashLink to="#home" scroll={(el) => scrollWithOffset(el)}>
        <button onClick={() => ScrollToTop()} className={styles.button}>
          {" "}
          {t("Menu.1")}
        </button>
      </NavHashLink>
      <NavHashLink to="#onas" scroll={(el) => scrollWithOffset(el)}>
        <button onClick={() => ScrollToAbout()} className={styles.button}>
          {" "}
          {t("Menu.2")}
        </button>
      </NavHashLink>
      <NavHashLink scroll={(el) => scrollWithOffset(el)} to="#oferta">
        <button onClick={() => ScrollToOffer()} className={styles.button}>
          {t("Menu.3")}
        </button>
      </NavHashLink>
      <NavHashLink to="#partnerzy" scroll={(el) => scrollWithOffset(el)}>
        <button onClick={() => ScrollToPartners()} className={styles.button}>
          {t("Menu.4")}
        </button>
      </NavHashLink>
      <NavHashLink to="#kontakt" scroll={(el) => scrollWithOffset(el)}>
        <button onClick={() => ScrollToContact()} className={styles.button}>
          {t("Menu.5")}
        </button>
      </NavHashLink>
    </>
  );
}

export default Links;
