import React, { useState } from "react";
import styles from "./Flag.module.scss";
import polish from "./polish.jpg";
import english from "./english.jpg";
import german from "./german.jpg";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    
  `}
`;

function Flag() {
  const { i18n } = useTranslation();
  const handleLang = (lang) => {
    i18n.changeLanguage(lang);
    setActive(lang);
  };

  const [active, setActive] = useState("pl");

  return (
    <div className={styles.flagContainer}>
      <ButtonToggle
        key="pl"
        active={active === "pl"}
        onClick={() => setActive("pl")}
      >
        <button className={styles.buttonFlag} onClick={() => handleLang("pl")}>
          <img
            src={polish}
            className={styles.flag}
            alt="polish-languange"
          ></img>
        </button>
      </ButtonToggle>
      <ButtonToggle
        key="en"
        active={active === "en"}
        onClick={() => setActive("en")}
      >
        <button className={styles.buttonFlag} onClick={() => handleLang("en")}>
          <img
            src={english}
            className={styles.flag}
            alt="english-languange"
          ></img>
        </button>
      </ButtonToggle>

      <ButtonToggle
        key="ger"
        active={active === "ger"}
        onClick={() => setActive("ger")}
      >
        <button className={styles.buttonFlag} onClick={() => handleLang("ger")}>
          <img
            src={german}
            className={styles.flag}
            alt="german-languange"
          ></img>
        </button>
      </ButtonToggle>
    </div>
  );
}

export default Flag;
