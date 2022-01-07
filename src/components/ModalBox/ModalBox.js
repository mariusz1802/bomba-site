import React, { useState } from "react";
import Factory from "./Factory";
import styled from "styled-components";
// import Counter from "./Elements/Counter";
import SendButton from "./Elements/SendButton";
import { GrClose } from "react-icons/gr";
import { VscClose } from "react-icons/vsc";
import { IconContext } from "react-icons";
import CountInput from "./Elements/CountInput";
import Counter from "./Elements/Counter";
import { Trans, useTranslation } from "react-i18next";
import i18next from "i18next";

const BackgroundModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

const Wrapper = styled.div`
  width: 55%;
  min-height: 95%;
  background-color: ${({ theme }) => theme.body};
  }};
  text-align: center;
  z-index: 1000;
  padding: 20px 20px 10px 20px ;
  overflow: hidden;
  position: relative;
`;

const Xbutton = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  font-size: 4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  transition: all 0.2s ease-in-out;
  :hover {
    color: red;
    cursor: pointer;
  }
`;

function ModalBox({ type, action, onClose }) {
  const { i18n } = useTranslation("array");
  const { t } = useTranslation();

  //   Logo states
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


  //update Check buttons by name
  const handleChange = (checkName) => {
    const updateCheck = logo.map((element) => {
      if (element.name === checkName) {
        element.checked = !element.checked;
        if (element.checked) {
          setLogoPrice(logoPrice + element.price);
        } else {
          setLogoPrice(logoPrice - element.price);
        }
        return element;
      }
      return element;
    });
    setLogo(updateCheck);
  };

  // update plus and minus input buttton
  const plusButton = (counterName, max) => {
    const updatedCounters = logo.map((element) => {
      if (element.name === counterName && element.value < max) {
        element.value++;
        element.counter++;
        setLogoPrice(logoPrice + element.price);
        return element;
      }
      return element;
    });
    setLogo(updatedCounters);
  };

  const minusButton = (counterName, min) => {
    const updatedCounters = logo.map((element) => {
      if (element.name === counterName && element.value > min) {
        element.value--;
        element.counter--;
        setLogoPrice(logoPrice - element.price);
        return element;
      }
      return element;
    });
    setLogo(updatedCounters);
  };

  return (
    <BackgroundModal>
      <Wrapper>
        <Xbutton onClick={onClose}>
          <VscClose />
        </Xbutton>
        {i18next.t("logoPrice", { returnObjects: true }).map((element, i) => (
          // eslint-disable-next-line react/jsx-key
          <Factory component={element} number={i} />
        ))}

        {logo.map((element, i) => (
          <>
            <Factory
              component={element}
              name={element.name}
              value={element.value}
              checked={element.checked}
              onChange={() => handleChange(element.name)}
              plusButton={() => plusButton(element.name, element.max)}
              minusButton={() => minusButton(element.name, element.min)}
            />
          </>
        ))}
        <Counter price={logoPrice} />
        <SendButton />
      </Wrapper>
    </BackgroundModal>
  );
}

export default ModalBox;
