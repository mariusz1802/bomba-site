import React from "react";
import Chapter from "../../components/Chapter/Chapter";
import styles from "./Contact.module.scss";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import logo from "./logo.png";

function Contact() {
  const { t } = useTranslation();

  return (
    <div id="kontakt">
      <Chapter title={t("contact.title")} />
      <div className={styles.contactStyle}>
        <div className={styles.column}>
          <h3>{t("contact.adresse")}</h3>
          <p className={styles.title}>
            <b>BOMBA</b> Web Design
          </p>
          <p>
            <b>{t("contact.phone")}</b><a href="tel:+48666742743">+48 666-742-743</a> 
          </p>
          <p>
            <b>Email:</b> <a href="mailto: contact.@bombadesign.pl">contact@bombadesign.pl </a>
          </p>
          <p>
            <b>{t("contact.adresse")} </b>
            {t("contact.street")}
          </p>
          <p>59-220 Legnica</p>
          <p>{t("contact.country")}</p>

          <h3 className={styles.certificate}> {t("contact.certificate")}</h3>
          <img src={logo} className={styles.logoRF} alt="certyfikat"/>
        </div>

        <div className={styles.column}>
          <h3>{t("contact.map")}</h3>
          <iframe
            className={styles.iframe}
            title="bomba"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.6680317364953!2d16.15713621564523!3d51.2067683795868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x196635148d5c8c76!2sBomba%20Web%20Design!5e0!3m2!1spl!2spl!4v1625726671056!5m2!1spl!2spl"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <div className={styles.openHours}>
            <p>
              <b>BOMBA</b> Web Design
            </p>
            <p>{t("contact.openingHours")}</p>
            <p>{t("contact.openingTime")}</p>
            <p className={styles.description}>{t("contact.description")} </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
