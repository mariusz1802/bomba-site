import React from "react";
import Chapter from "../../components/Chapter/Chapter";
import Slider from "./Slider";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./Partners.module.scss";
import styled from "styled-components";
function Partners() {
  const { t } = useTranslation();

  const PartnersWrapper = styled.div`
    background-color: ${({ theme }) => theme.graditent};
    color: ${({ theme }) => theme.text};
    padding: 0px 30px 30px 30px;
    @media screen and (min-width: 1100px) {
      width: 80%;
      margin: auto;
    }
  `;

  return (
    <div id="partnerzy">
      <PartnersWrapper>
        <Chapter
          title={t("partners.title")}
          subtitle={t("partners.subtitle")}
        />
        <Slider />
        <Router>
          <div className={styles.column}>
            <Link smooth to="#formularz">
              {" "}
              <Button title={t("partners.button")} buttonColor="green" />{" "}
            </Link>
          </div>
        </Router>
      </PartnersWrapper>
    </div>
  );
}

export default Partners;
