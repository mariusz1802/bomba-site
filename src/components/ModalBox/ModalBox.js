import React, { useState } from "react";
import ReactDOM from "react-dom";
import Factory from "./Factory";
import styled from "styled-components";
import FancyButton from "../FancyButton/FancyButton"
import { GrClose } from "react-icons/gr";
import { VscClose } from "react-icons/vsc";
import { IconContext } from "react-icons";
import CountInput from "./Elements/CountInput";
import Counter from "./Elements/Counter";
import { Trans, useTranslation } from "react-i18next";
import useFade from "../../hooks/useFade/useFade";
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
  padding: 20px 20px 20px 20px ;
  overflow: hidden;
  position: relative;

`;

const Invisible = styled.div`
  opacity: 0;
`;

const Visible = styled.div`
  opacity: 1;
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

function ModalBox({ type, action, onClose, price, setPrice, modalName }) {
  const { t } = useTranslation();

  //update Check buttons by name
  const handleChange = (checkName) => {
    const updateCheck = type.map((element) => {
      if (element.name === checkName) {
        element.checked = !element.checked;
        if (element.checked) {
          setPrice(price + element.price);
        } else {
          setPrice(price - element.price);
        }
        return element;
      }
      return element;
    });
    action(updateCheck);
  };

  // update plus and minus input buttton
  const plusButton = (counterName, max) => {
    const updatedCounters = type.map((element) => {
      if (element.name === counterName && element.value < max) {
        element.value++;
        element.counter++;
        setPrice(price + element.price);
        return element;
      }
      return element;
    });
    action(updatedCounters);
  };

  const minusButton = (counterName, min) => {
    const updatedCounters = type.map((element) => {
      if (element.name === counterName && element.value > min) {
        element.value--;
        element.counter--;
        setPrice(price - element.price);
        return element;
      }
      return element;
    });
    action(updatedCounters);
  };

  const [isVisible, setVisible, fadeProps] = useFade(true);

  return ReactDOM.createPortal(
    <BackgroundModal>
      <Wrapper {...fadeProps}>
        <Xbutton onClick={onClose}>
          <VscClose />
        </Xbutton>

        {i18next.t(modalName, { returnObjects: true }).map((element, i) => (
          // eslint-disable-next-line react/jsx-key
          <Factory component={element} number={i} />
        ))}
        {type.map((element, i) => (
          <>
            <Factory
              component={element}
              name={element.name}
              value={element.value}
              modalName={modalName}
              checked={element.checked}
              onChange={() => handleChange(element.name)}
              plusButton={() => plusButton(element.name, element.max)}
              minusButton={() => minusButton(element.name, element.min)}
            />
          </>
        ))}
        <Counter price={price} />
        <FancyButton text={t("intresstedButton.text")} />
      </Wrapper>
    </BackgroundModal>,
    document.getElementById("modal-root")
  );
}

export default ModalBox;
