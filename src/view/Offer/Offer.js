import React, { useEffect, useState } from "react";
import Chapter from "../../components/Chapter/Chapter";
import styles from "./Offer.module.scss";
import GreyBox from "../../components/GreyBox/GreyBox";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import ModalBoxPrices from "../../components/ModalBoxPrices/ModalBoxPrices";
import CheckType from "../../components/ModalBoxPrices/CheckType";
import "aos/dist/aos.css";
import useFade from "../../hooks/useFade/useFade";
//images
import logo from "./new-way-trip-logo.png";
import website from "./website.jpg";
import shop from "./onlines-shop.jpg";
import ad from "./Advisertment.png";
import logoAvif from "./new-way-trip-logo.avif";
import websiteAvif from "./website.avif";
import shopAvif from "./onlines-shop.avif";
import adAvif from "./Advisertment.avif";

function Offer() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
      },
      []
    );
  });

  const [modal, setModal] = useState();
  const [type, setType] = useState("");
  const [isVisible, setVisible, fadeProps] = useFade();

  const handleModal = (type) => {
    setModal(!modal);
    setType(type);
  };

  const handleVisible = (type) => {
    setVisible(!isVisible);
    setType(type);
  };

  return (
    <>
      {isVisible && <CheckType onClose={handleVisible} type={type} />}
      <div id="oferta">
        <Chapter
          title={t("offer.title")}
          description={t("offer.description")}
        />
        
        <h3 className={styles.whatWeCanDo}> {t("offer.whatWeCanDo")} </h3>
        <div className={styles.oferta}>
          <div className={styles.column}>
            <GreyBox
              title={t("offerLogo.title")}
              imgSrc={logo}
              srcSet={logoAvif}
              description={t("offerLogo.description")}
              ownClass={styles.ownClass}
              animationImage="fade"
              dataAos="fade-up"
              onClick={() => handleVisible("logo")}
              withButton
              text={t("fancyButton.text")}
            />
          </div>
          <div className={styles.column}>
            <GreyBox
              title={t("offerWebsite.title")}
              imgSrc={website}
              srcSet={websiteAvif}
              dataAos="fade-up"
              description={t("offerWebsite.description")}
              ownClass={styles.ownClass}
              animationImage="fade"
              onClick={() => handleVisible("website")}
              withButton
              text={t("fancyButton.text")}
            />
          </div>
          <div className={styles.column}>
            <GreyBox
              title={t("offerShop.title")}
              imgSrc={shop}
              srcSet={shopAvif}
              dataAos="fade-up"
              description={t("offerShop.description")}
              ownClass={styles.ownClass}
              onClick={() => handleVisible("shop")}
              animationImage="fade"
              withButton
              text={t("fancyButton.text")}
            />
          </div>
          <div className={styles.column}>
            <GreyBox
              title={t("offerPainting.title")}
              imgSrc={ad}
              srcSet={adAvif}
              dataAos="fade-up"
              description={t("offerPainting.description")}
              ownClass={styles.ownClass}
              onClick={() => handleVisible("promo")}
              animationImage="fade"
              withButton
              text={t("fancyButton.text")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
