import React, { useState } from 'react';
import styles from './Flag.module.scss';
import polish from './polish.jpg';
import english from './english.jpg';
import german from './german.jpg';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ButtonToggle = styled.button`
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

  const [active, setActive] = useState(i18n.language);

  return (
    <div className={styles.flagContainer}>
      <ButtonToggle
        key="pl"
        active={active === 'pl'}
        onClick={() => handleLang('pl')}
      >
        <div className={styles.buttonFlag}>
          <img
            src={polish}
            className={styles.flag}
            alt="polish-languange"
          ></img>
        </div>
      </ButtonToggle>
      <ButtonToggle
        key="en"
        active={active === 'en'}
        onClick={() => handleLang('en')}
      >
        <div className={styles.buttonFlag}>
          <img
            src={english}
            className={styles.flag}
            alt="english-languange"
          ></img>
        </div>
      </ButtonToggle>

      <ButtonToggle
        key="ger"
        active={active === 'ger'}
        onClick={() => handleLang('ger')}
      >
        <div className={styles.buttonFlag}>
          <img
            src={german}
            className={styles.flag}
            alt="german-languange"
          ></img>
        </div>
      </ButtonToggle>
    </div>
  );
}

export default Flag;
