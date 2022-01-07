import React, { useState } from "react";
import CheckedButton from "../ModalBox/Elements/CheckedBox";
import ToCheckBox from "../ModalBox/Elements/ToCheckBox";
import TitleComponent from "./Elements/TitleComponent";
import CountInput from "./Elements/CountInput";
import Counter from "./Elements/Counter";
import { useTranslation } from "react-i18next";

function Factory({
  component,
  checked,
  onChange,
  value,
  setValue,
  plusButton,
  minusButton,
  name,
  price,
  number,
}) {
  const { t } = useTranslation();
  switch (component.type) {
    case "title":
      return <TitleComponent text={component.text} />;
    case "checkbox":
      return <CheckedButton text={t(`logoPrice.${number}.text`)} />;
    case "tocheck":
      return (
        <ToCheckBox
          text={component.text}
          checked={checked}
          onChange={onChange}
        />
      );
    case "prices":
      return (
        <CountInput
          text={component.text}
          value={value}
          setValue={setValue}
          plusButton={plusButton}
          minusButton={minusButton}
          name={name}
        />
      );

    default:
      return <div>Reload...</div>;
  }
}

export default Factory;
