import React from "react";
import styles from "./NavbarDesktop.module.scss";
import { NavHashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import Scrollspy from "react-scrollspy";

window.scroll({ behavior: "smooth" });

function Links() {
  // Change languange
  const { t } = useTranslation();

  return (
    <Scrollspy
      items={["home", "onas", "oferta", "partnerzy", "kontakt"]}
      currentClassName={styles.myclass}
    >
      <NavHashLink to="#home">
        <button currentClassName className={styles.button}>
          {" "}
          {t("Menu.1")}
        </button>
      </NavHashLink>
      <NavHashLink to="#onas">
        <button currentClassName className={styles.button}>
          {" "}
          {t("Menu.2")}
        </button>
      </NavHashLink>
      <NavHashLink to="#oferta">
        <button currentClassName className={styles.button}>
          {t("Menu.3")}
        </button>
      </NavHashLink>
      <NavHashLink to="#partnerzy">
        <button currentClassName className={styles.button}>
          {t("Menu.4")}
        </button>
      </NavHashLink>
      <NavHashLink to="#kontakt">
        <button currentClassName className={styles.button}>
          {t("Menu.5")}
        </button>
      </NavHashLink>
    </Scrollspy>
  );
}

export default Links;
