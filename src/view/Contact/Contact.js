import React from "react";
import Chapter from "../../components/Chapter/Chapter";
import styles from "./Contact.module.scss";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import logo from "./logo.png";
import Hyphenated from "react-hyphen";
import pl from "hyphenated-pl";
import { Column, ContactStyle } from "./Contact.styled";
import styled from "styled-components";

function Contact() {
  const { t } = useTranslation();

  const Description = styled.p`
    color: ${({ theme }) => theme.ahref};
    & b {
      color: ${({ theme }) => theme.ahref};
    }
  `;
  const Title = styled.p`
    font-size: 1.3rem;
    line-height: 1.1;
    & b {
      font-size: 2.3rem;
      font-family: "Pacifico";
      color : #2b2b2b;
    }
  `;

  return (
    <div id="kontakt">
      <Chapter title={t("contact.title")} />
      <ContactStyle>
        <Column>
          <h3>{t("contact.adresse")}</h3>
          <div className={styles.contactWrapper}>
            <Title>
              <b>Bomba</b> <p>web design </p>
            </Title>
            <p clasName={styles.dataBlock}>
              {t("contact.phone")}
              <a href="tel:+48666742743">
                <b> +48 666-742-743 </b>
              </a>
            </p>
            <p className={styles.dataBlock}>
              <span>Email:</span>
              <a href="mailto: contact.@bombadesign.pl">
                <b>info@bombadesign.pl</b> 
              </a>
            </p>
            <p className={styles.dataBlock}>
              {t("contact.adresse")}

              <b>
                {t("contact.street")}
                <b>59-220 Legnica</b>
                <p>{t("contact.country")}</p>
              </b>
            </p>
          </div>

          <h3 className={styles.certificate}> {t("contact.certificate")}</h3>
          <img src={logo} className={styles.logoRF} alt="certyfikat" />
        </Column>

        <Column>
          <h3>{t("contact.map")}</h3>
          <iframe
            className={styles.iframe}
            title="bomba"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.6680317364953!2d16.15713621564523!3d51.2067683795868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x196635148d5c8c76!2sBomba%20Web%20Design!5e0!3m2!1spl!2spl!4v1625726671056!5m2!1spl!2spl"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className={styles.openHours}>
            <Hyphenated language={pl}>
              <p className={styles.dataBlock}>
                <Description>{t("contact.openingHours")}</Description>
                <Description>{t("contact.openingTime")}</Description>
              </p>
              <Description>{t("contact.description")} </Description>
            </Hyphenated>
          </div>
        </Column>
        <Column>
          <ContactForm />
        </Column>
      </ContactStyle>
    </div>
  );
}

export default Contact;
