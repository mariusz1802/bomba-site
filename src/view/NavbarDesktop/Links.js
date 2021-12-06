import React from "react";
import styles from "./NavbarDesktop.module.scss";
import { NavHashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import Scrollspy from "react-scrollspy";

window.scroll({ behavior: 'smooth' });

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

  return (
    <Scrollspy
      items={["home", "onas", "oferta", "partnerzy", "kontakt"]}
      currentClassName={styles.myclass}
    >
      <NavHashLink to="#home" scroll={(el) => scrollWithOffset(el)}>
        <button currentClassName className={styles.button}>
          {" "}
          {t("Menu.1")}
        </button>
      </NavHashLink>
      <NavHashLink to="#onas" scroll={(el) => scrollWithOffset(el)}>
        <button currentClassName className={styles.button}>
          {" "}
          {t("Menu.2")}
        </button>
      </NavHashLink>
      <NavHashLink scroll={(el) => scrollWithOffset(el)} to="#oferta">
        <button currentClassName className={styles.button}>
          {t("Menu.3")}
        </button>
      </NavHashLink>
      <NavHashLink scroll={(el) => scrollWithOffset(el)} to="#partnerzy">
        <button currentClassName className={styles.button}>
          {t("Menu.4")}
        </button>
      </NavHashLink>
      <NavHashLink scroll={(el) => scrollWithOffset(el)} to="#kontakt">
        <button currentClassName className={styles.button}>
          {t("Menu.5")}
        </button>
      </NavHashLink>
    </Scrollspy>
  );
}

export default Links;
