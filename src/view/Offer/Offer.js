import React, { useEffect } from "react";
import Chapter from "../../components/Chapter/Chapter";
import styles from "./Offer.module.scss";
import GreyBox from "../../components/GreyBox/GreyBox";
import logo from "./new-way-trip-logo.png";
import website from "./website.jpg";
import painting from "./PAINTING-MATERIALS.jpg";
import shop from "./onlines-shop.jpg";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function Offer() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        // once : true
      },
      []
    );
  });

  return (
    <div id="oferta">
      <Chapter title={t("offer.title")} description={t("offer.description")} />
      <h3 className={styles.whatWeCanDo}> {t("offer.whatWeCanDo")} </h3>
      <div className={styles.oferta}>
        <div className={styles.column}>
          <GreyBox
            title={t("offerLogo.title")}
            imgSrc={logo}
            description={t("offerLogo.description")}
            ownClass={styles.ownClass}
            animationImage="fade"
            onClick={() => alert("!Klik")}
          />
        </div>
        <div className={styles.column}>
          <GreyBox
            title={t("offerWebsite.title")}
            imgSrc={website}
            description={t("offerWebsite.description")}
            ownClass={styles.ownClass}
            animationImage="fade"
        
            onClick={() => alert("!Klik2")}
          />
        </div>
        <div className={styles.column}>
          <GreyBox
            title={t("offerShop.title")}
            imgSrc={shop}
            description={t("offerShop.description")}
            ownClass={styles.ownClass}
            animationImage="fade"
        
          />
        </div>
        <div className={styles.column}>
          <GreyBox
            title={t("offerPainting.title")}
            imgSrc={painting}
            description={t("offerPainting.description")}
            ownClass={styles.ownClass}
            animationImage="fade"
         
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
