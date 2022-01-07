import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import ModalBox from "./ModalBox";

export default function CheckType({ type, action, onClose }) {
  const { t } = useTranslation();
  const [logoPrice, setLogoPrice] = useState(500);
  const [logo, setLogo] = useState([
    {
      type: "tocheck",
      checked: false,
      name: "rights",
      text: t("rightsLogo.text"),
      price: 200,
    },
    {
      type: "prices",
      name: "projectsAmount",
      text: t("projectAmount.text"),
      price: 300,
      value: 1,
      counter: 0,
      max: 5,
      min: 1,
    },
    {
      type: "prices",
      name: "correctAmount",
      text: t("correctAmount.text"),
      price: 100,
      value: 2,
      counter: 0,
      max: 5,
      min: 2,
    },
  ]);

  //   Website states
  const [websitePrice, setWebsitePrice] = useState(1000);
  const [website, setWebsite] = useState([
    {
      type: "tocheck",
      checked: false,
      name: "rights",
      text: t("websiteLogo.text"),
      price: 300,
    },
    {
      type: "tocheck",
      checked: false,
      name: "rights",
      text: t("websiteText.text"),
      price: 400,
    },
    {
      type: "prices",
      name: "projectsAmount",
      text: t("websitePage.text"),
      price: 200,
      value: 0,
      counter: 0,
      max: 10,
      min: 1,
    },
  ]);

  switch (type) {
    case "logo":
      return (
        <ModalBox
          type={logo}
          action={setLogo}
          onClose={onClose}
          price={logoPrice}
          setPrice={setLogoPrice}
        />
      );
    case "website":
      return (
        <ModalBox
          type={website}
          action={setWebsite}
          onClose={onClose}
          price={websitePrice}
          setPrice={setWebsitePrice}
        />
      );
  }
}
