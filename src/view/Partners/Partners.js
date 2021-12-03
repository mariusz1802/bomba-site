import React from "react";
import Chapter from "../../components/Chapter/Chapter";
import Slider from "./Slider";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Partners.module.scss";
function Partners() {
  const { t } = useTranslation();
  return (
    <div id="partnerzy">
      <div className={styles.partners}>
        <Chapter
          title={t("partners.title")}
          subtitle={t("partners.subtitle")}
        />
        <Slider />
        <Router>
          <div className={styles.column}>
            <Link smooth to="#kontakt">
              {" "}
              <Button
                title={t("partners.button")}
                buttonSize="small"
                buttonColor="green"
              />{" "}
            </Link>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Partners;
