import React, { useEffect } from "react";
import styles from "./AboutUs.module.scss";
import GreyBox from "../../components/GreyBox/GreyBox";
import Chapter from "../../components/Chapter/Chapter";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

//images
import react from "./react-logo.png";
import maniollo from "./maniolo.png";
import js from "./JS-logo.jpg";
import wordpress from "./wordpress-logo.png";
import node from "./node-logo.png";
import reactAvif from "./react-logo.avif";
import maniolloAvif from "./maniolo.avif";
import jsAvif from "./JS-logo.avif";
import wordpressAvif from "./wordpress-logo.avif";
import nodeAvif from "./node-logo.avif";

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
        src={maniollo}
        srcSet={maniolloAvif}
      />
      <h3 className={styles.technologies}>{t("aboutUs.technologies")} </h3>
      <div className={styles.container}>
        <div className={styles.column}>
          <GreyBox
            title="Java Script"
            imgSrc={js}
            srcSet={jsAvif}
            dataAos="fade-in"
          />
        </div>
        <div className={styles.column}>
          <GreyBox
            title="React JS"
            imgSrc={react}
            srcSet={reactAvif}
            dataAos="fade-in"
          />
        </div>
        <div className={styles.column}>
          <GreyBox
            title="NodeJS"
            imgSrc={node}
            srcSet={nodeAvif}
            dataAos="fade-in"
          />
        </div>
        <div className={styles.column}>
          <GreyBox
            title="Wordpress"
            imgSrc={wordpress}
            srcSet={wordpressAvif}
            dataAos="fade-in"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
