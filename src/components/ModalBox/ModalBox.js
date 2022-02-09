import React, { useState } from "react";
import ReactDOM from "react-dom";
import Factory from "../ModalBoxPrices/Factory";
import styled from "styled-components";
import FancyButton from "../FancyButton/FancyButton";
import { GrClose } from "react-icons/gr";
import { VscClose } from "react-icons/vsc";
import { device } from "../../device";
import { IconContext } from "react-icons";
import CountInput from "../ModalBoxPrices/Elements/CountInput";
import Counter from "../ModalBoxPrices/Elements/Counter";
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
  align-content: center;
`;

const Wrapper = styled.div`
  width: 55%;
  /* min-height: 95%; */
  background-color: ${({ theme }) => theme.body};
  }};
  text-align: center;
  z-index: 1000;
  padding: 20px 20px 20px 20px ;
  /* overflow: hidden; */
  overflow-y: auto;
  position: relative;

  @media ${device.mobileL}{
      padding: 10px 10px 30px 10px ;
      font-size : .8rem;
  }

  @media ${device.laptopL}{
      width: 95%;
      font-size : 1rem;


  }
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

  @media ${device.mobileL} {
    font-size: 3rem;
    right: 10px;
  }
  top: 5px;
`;

function ModalBox({ onClose, children }) {
  const { t } = useTranslation();

  const [isVisible, setVisible, fadeProps] = useFade(true);

  return (
    <BackgroundModal>
      <Wrapper {...fadeProps}>
        <Xbutton onClick={onClose}>
          <VscClose />
        </Xbutton>
        {children}
      </Wrapper>
    </BackgroundModal>
  );
}

export default ModalBox;
