import React, { useEffect } from "react";
import styles from "./AboutUs.module.scss";
import GreyBox from "../../components/GreyBox/GreyBox";
import Chapter from "../../components/Chapter/Chapter";
import js from "./JS-logo.jpg";
import wordpress from "./wordpress-logo.png";
import node from "./node-logo.png";
import react from "./react-logo.png";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
      },
      []
    );
  });

  return (
      <div id="onas">
        <Chapter
          title={t("aboutUs.title")}
          description={t("aboutUs.description")}
        />
        <h3 className={styles.technologies}>{t("aboutUs.technologies")} </h3>
        <div className={styles.container}>
          <div className={styles.column}>
            <GreyBox title="Java Script" imgSrc={js}  />
          </div>
          <div className={styles.column}>
            <GreyBox title="React JS" imgSrc={react}  />
          </div>
          <div className={styles.column}>
            <GreyBox title="NodeJS" imgSrc={node}  />
          </div>
          <div className={styles.column}>
            <GreyBox title="Wordpress" imgSrc={wordpress}  />
          </div>
        </div>
      </div>
  );
}

export default AboutUs;
