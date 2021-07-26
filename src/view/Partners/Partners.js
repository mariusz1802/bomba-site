import React from "react";
import Chapter from "../../components/Chapter/Chapter";
import Slider from "./Slider";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styles from './Partners.module.scss'
function Partners() {
  const { t } = useTranslation();
  return (
    <>
    <Chapter title={t("partners.title")} subtitle={t("partners.subtitle")} />
    <div id="partnerzy" className={styles.partners}>
      <Slider />
    </div>
      <Router>
        <div className={styles.column}>
          <Link smooth to="#kontakt">
            {" "}
            <Button title={t("partners.button")} buttonSize="small" buttonColor="green" />{" "}
          </Link>
        </div>
      </Router>
    </>
  );
}

export default Partners;
